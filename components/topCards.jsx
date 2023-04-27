/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect} from 'react';
import { BsArrowUpCircle, BsArrowDownCircle, BsBank} from 'react-icons/bs';
import axios from '../services/axios'

import Modal from './modal';

function TopCards() {


  const [balaco, setBalaco] = useState([])
  const [ativos, setAtivos] = useState([])
  const [passivos, setPassivos] = useState([])

  

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/empresa/filha/balanco');
      setBalaco(response.data)
      
      
    }

    getData();
  }, []);


  const [IsclickedEntrada, setIsclickedEntrada] = useState(false);
  const [IsclickedSaida, setIsclickedSaida] = useState(false);

  const handleCheckboxChangeEntrada = () => {
    setIsclickedEntrada(!IsclickedEntrada);
    if (!IsclickedSaida) {
      setIsclickedSaida(!IsclickedSaida);
    }
    console.log(`Entrada: ${IsclickedEntrada}`);
  };

  const handleCheckboxChangeSaida = () => {
    setIsclickedSaida(!IsclickedSaida);
    if (IsclickedEntrada) {
      setIsclickedEntrada(!IsclickedEntrada);
    }
    console.log(`Saida: ${IsclickedSaida}`);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-4 p-4 -mt-[3.5rem] lg:mx-[7rem]">

      <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-7">
          <p className="text-gray-400">Entradas</p>
          <p className="text-3xl font-bold">KZ 5.700,00</p>
        </div>
        <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
          <BsArrowUpCircle size={30} className="text-green-400" />
        </p>
      </div>

      <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-7">
          <p className="text-gray-400">Saídas</p>
          <p className="text-3xl  font-bold">KZ 300,000</p>
        </div>
        <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
          <BsArrowDownCircle size={30} className=" text-red-600" />
        </p>
      </div>

      <div className="  bg-green-400 flex justify-between w-full  p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-7">
          <p className="text-white">Balanço</p>
          <div className="flex justify-between">
            <p className="text-4xl text-white font-bold">KZ {balaco.balanco}</p>

          </div>

        </div>
        <div className=" flex flex-col gap-[3rem] items-center p-2 rounded-lg -mt-[0rem]">
          <BsBank size={30} className="text-white" />
          <Modal>
            {' '}
            <div className="flex justify-center align-center mt-[4rem]">

              <div className="bg-white w-[25rem] p-5 rounded-[5px]">
                <h1 className="text-center font-bold">Cadastrar trasanção</h1>
                <div className="mt-[2rem]">
                  <form action="">
                    <input
                      type="text"
                      className="border w-full h-[2.8rem] p-5 text-sm
                      rounded-[5px] bg-gray-100"
                      placeholder="Descrição"
                    />

                    <input
                      type="number"
                      className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                       rounded-[5px] bg-gray-100 mt-3"
                      placeholder="Valor"
                    />

                    <input
                      id="CheckboxEntrada"
                      type="checkbox"
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 hidden "
                      checked={IsclickedEntrada}
                      onChange={handleCheckboxChangeEntrada}
                    />

                    <input
                      id="CheckboxSaida"
                      type="checkbox"
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 hidden "
                      checked={IsclickedSaida}
                      onChange={handleCheckboxChangeSaida}
                    />

                    <div className="flex justify-between gap-2">

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
                    </div>

                    <select className="w-full h-[2.8rem] text-ms mt-3 px-5 text-base">
                      <option value="opcao1 w-10" selected>Compras</option>
                      <option value="opcao2">Salário</option>
                      <option value="opcao3">Despesa</option>
                    </select>
                    <button className="bg-green-400 w-full
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
