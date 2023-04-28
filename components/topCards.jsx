/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect} from 'react';
import { BsArrowUpCircle, BsArrowDownCircle, BsBank} from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/modules/auth/actions'
import axios from '../services/axios'

import Modal from './modal';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

function TopCards() {
  const dispatch  = useDispatch()
  const [tipo, setTipo] = useState('receita');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [toggle, setToggle] = useState(false)
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


  const [balaco, setBalaco] = useState([])
  const [entrada, setEntrada] = useState()
  const [saidas, setSaidas] = useState()
  
  
  

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/empresa/filha/balanco');
      setBalaco(response.data)

      const passivo = await axios.get('/empresa/filha/passivos');
      setSaidas(passivo.data.passivo)

      const ativo = await axios.get('/empresa/filha/ativos');
      setEntrada(ativo.data.ativo)
    
      
    }

    getData();
  }, []);
  
  



  return (

    
    <div className="grid lg:grid-cols-3 gap-4 p-4 -mt-[3.5rem] lg:mx-[7rem]">
      
      <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-7">
          <p className="text-gray-400">Ativos</p>
          <p className="text-3xl font-bold">KZ {entrada}</p>
        </div>
        <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
          <BsArrowUpCircle size={30} className="text-green-400" />
        </p>
      </div>

      <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-7">
          <p className="text-gray-400">Passivos</p>
          <p className="text-3xl  font-bold">Kz {saidas}</p>
        </div>
        <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
          <BsArrowDownCircle size={30} className=" text-red-600" />
        </p>
      </div>

      <div className="  bg-green-400 flex justify-between w-full  p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-7">
          <p className="text-white">Balanço</p>
          <div className="flex justify-between">
            <p className="text-4xl text-white font-bold">Kz {balaco.balanco}</p>

          </div>

        </div>
        <div className=" flex flex-col gap-[3rem] items-center p-2 rounded-lg -mt-[0rem]">
          <BsBank size={30} className="text-white" />
          <Modal toggle={toggle}>
            {' '}
            <div className="flex justify-center align-center mt-[4rem]">

              <div className="bg-white w-[25rem] p-5 rounded-[5px]">
                <h1 className="text-center font-bold">Cadastrar trasanção</h1>
                <div className="mt-[2rem]">
                  <form onSubmit={handleSubmit}>
                    <input value={descricao} onChange={(e) => setDescricao(e.target.value)}
                      type="text"
                      className="border w-full h-[2.8rem] p-5 text-sm
                      rounded-[5px] bg-gray-100"
                      placeholder="Descrição"
                    />

                    <input value={valor} onChange={(e) => setValor(e.target.value)}
                      type="number"
                      className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                       rounded-[5px] bg-gray-100 mt-3"
                      placeholder="Valor"
                    />

                  

                    {/* <div className="flex justify-between gap-2">

                      <label
                        htmlFor="CheckboxEntrada"
                        className={` w-[50%] h-[2.8rem] text-ms mt-3 p-3 px-[1.5rem] bg-gray-100
                        cursor-pointer  flex justify-between text-sm text-gray-900 rounded-[5px]
                         ${IsclickedEntrada ? 'bg-green-400' : ''}`}
                      >
                        Entradas
                        <BsArrowUpCircle size={20} className=" text-green-400" />
                      </label>

                      <label
                        htmlFor="CheckboxSaida"
                        className={` w-[50%] h-[2.8rem] text-ms mt-3 p-3 px-[1.5rem] bg-gray-100
                        cursor-pointer  flex justify-between text-sm text-gray-900 rounded-[5px]
                         ${IsclickedSaida ? 'bg-red-500' : ''}`}
                      >
                        Saída
                        <BsArrowDownCircle size={20} className=" text-red-500" />
                      </label>
                    </div> */}

                    <select className="w-full h-[2.8rem] text-ms mt-3 px-5 text-base" value={tipo} onChange={handleTypeChange}>
                      <option value="receita" selected>Receita</option>
                      <option value="despesa">Despesa</option>
                    </select>
                    <button  className="bg-green-400 w-full 
       h-[2.8rem] text-white mt-3 rounded-[5px]" 
                    >
                      Cadastrar

                    </button>
                  </form>
                </div>

              </div>
            </div>

          </Modal>
        </div>

      </div>

    </div>
  );
}

export default TopCards;


// #TODO  trabalando aqui