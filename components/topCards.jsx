/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect} from 'react';
import { BsArrowUpCircle, BsArrowDownCircle, BsBank} from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import * as actions from '../store/modules/auth/actions'
import axios from '../services/axios'

import Modal from './modal';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import Link from 'next/link';

function TopCards() {
  const dispatch  = useDispatch()
  const [tipo, setTipo] = useState('receita');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [toggle, setToggle] = useState(false)
  const [balanco, setBanlaco] = useState([])
  const conta_id = 1
  const empresa_filha_id = 1

  const router = useRouter();

  function handleTypeChange(event) {
    setTipo(event.target.value);
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!descricao || !valor ) {
      formErrors = true;
      toast.error('Todos campos são requeridos');
    }


    
    if (formErrors) return;

    
      dispatch(actions.registerTransacoesRequest({ tipo, descricao, valor, conta_id, empresa_filha_id}));
 
  };
 
  
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/empresa/filha/balanco');
      setBanlaco(response.data)
    
      
    }

    getData();
  }, []);
  
  



  return (

    
    <div className="grid lg:grid-cols-3 gap-4 p-4 -mt-[3.5rem] lg:mx-[7rem]">
      
      <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-7">
          <p className="text-gray-400">Conta ativos</p>
          <p className="text-3xl font-bold">Kz {balanco.ativos}</p>
        </div>
        <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
          <BsArrowUpCircle size={30} className="text-green-400" />
        </p>
      </div>

      <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-7">
          <p className="text-gray-400">Conta passivos</p>
          <p className="text-3xl  font-bold">Kz {balanco.passivos}</p>
        </div>
        <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
          <BsArrowDownCircle size={30} className=" text-red-600" />
        </p>
      </div>

      <div className="  bg-green-400 flex justify-between w-full  p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-7">
          <p className="text-white">Balanço geral</p>
          <div className="flex justify-between">
            <p className="text-4xl text-white font-bold">Kz {balanco.balanco_geral}</p>

          </div>

        </div>
        <div className=" flex flex-col gap-[3rem] items-center p-2 rounded-lg -mt-[0rem]">
          <BsBank size={30} className="text-white" />
          <Link href="cadastrar/transacao">   
          <AiFillPlusCircle  size={25} className="text-white right-5 cursor-pointer" />
          </Link>
       
       
        </div>

      </div>

    </div>
  );
}

export default TopCards;


// #TODO  trabalando aqui