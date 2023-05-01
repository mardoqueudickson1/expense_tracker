/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';
import axios from '../services/axios'
import { format, parseISO } from 'date-fns';
import { data } from '../data/data';
import Loading from './Loading';

function Transações() {
  const [transacoes, setTransacoes] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true)
      const response = await axios.get('/empresa/filha/transacoes');
      setTransacoes(response.data);
      setIsLoading(false)

    }

    getData();
  }, []);

  return (
    <>

      <Loading isLoading={isLoading} />
      <div className="w-full col-span-1 relative lg:h-[62vh] h-[50vh] m-auto md:col-span-2 p-4 border rounded-lg bg-white overflow-scroll">


        <table className="min-w-full ">
          <thead className="bg-azulScuro text-white">
            <tr>

              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left   uppercase "
              >
                Data
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-center   uppercase "
              >
                Descrição
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right  uppercase "
              >
                Valor
              </th>




            </tr>
          </thead>

          {/* Corpo da tabela */}
          <tbody className="">


          {transacoes.map((item, index) => (

             <tr>

              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {item.data_formatada}
              </td>
              <td className="px-6 py-4  text-center text-sm text-gray-800 whitespace-nowrap">
                {item.descricao}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-end ">
              <p className="lg:flex text-sm text-green-500 md:hidden absolute right-6 ">
              {item.tipo === 'despesa' ? (
                <span className="text-red-600">
                  -
                  {item.valor} Kz
                </span>
              ) : (
                <span>
                  +
                  {item.valor} Kz

                </span>
              )}
            </p>
              </td>

            </tr>
          ))}
           

            

          </tbody>
        </table>

      </div>

    </>
  );
}

export default Transações;






