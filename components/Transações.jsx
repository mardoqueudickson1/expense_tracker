/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';
import axios  from '../services/axios'
import { data } from '../data/data';

function Transações() {
  const [transacoes, setTransacoes] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/empresa/filha/transacoes');
      setTransacoes(response.data);
      
    }

    getData();
  }, []);

  return (
    <div className="w-full col-span-1 relative lg:h-[62vh] h-[50vh] m-auto md:col-span-2 p-4 border rounded-lg bg-white overflow-scroll">

      <div className="flex justify-between gap-7 px-4">
        <h1>Transações</h1>
        <h1>Valor</h1>
      </div>
      <ul>
        {transacoes.map((item, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="">
              <BsArrowUpCircle size={25} className={item.tipo === 'despesa' ? 'text-red-600 rotate-180' : 'text-green-500'} />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">{`${item.descricao}`}</p>
              <p className="text-gray-500 text-sm">{item.created_at}</p>
            </div>

            <p className="lg:flex text-lg text-green-500 md:hidden absolute right-6 ">
              {item.tipo === 'despesa' ? (
                <span className="text-red-600">
                  -
                  {item.valor}
                </span>
              ) : (
                <span>
                  +
                  {item.valor}

                </span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transações;
