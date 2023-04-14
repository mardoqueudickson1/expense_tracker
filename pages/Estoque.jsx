/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import {
  BsThreeDotsVertical, BsArrowUpCircle, BsArrowDownCircle, BsFillClipboardCheckFill,
} from 'react-icons/bs';

import { BiMoneyWithdraw } from 'react-icons/bi';
import Modal from '@/components/modal';
import { data } from '../data/data';

function Estoque() {
  // Paginação
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalItems = data.length;
  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  // Pesquisa em tempo real
  const [search, setsearch] = useState('');
  return (
    <div>

      <div className=" bg- bg-indigo-700 flex justify-between p-10 lg:px-14
    md:flex md:justify-between order-center"
      >
        <div className="text-white text-3xl relative -top-5 ">Estoque</div>
        <div className="bg-indigo-800 p-4 w-[15rem] text-center rounded-lg
                  cursor-pointer text-white relative -top-5 flex justify-between"
        >

          <span className="sm: text-xs">Abril de 2023</span>

        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-4 p-4 -mt-[3.5rem] lg:mx-[2rem]">

        <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 gap-7">
            <p className="text-gray-400">Produtos cadastrados</p>
            <p className="text-3xl font-bold">120</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
            <BsFillClipboardCheckFill size={30} className="text-azulScuro" />
          </p>
        </div>

        <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 gap-7">
            <p className="text-gray-400">Produtos com estoque</p>
            <p className="text-3xl font-bold">5.700</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
            <BsArrowUpCircle size={30} className="text-green-400" />
          </p>
        </div>

        <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 gap-7">
            <p className="text-gray-400">Categoria</p>
            <p className="text-3xl  font-bold">300,000</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
            <BsArrowDownCircle size={30} className=" text-red-600" />
          </p>
        </div>

        <div className="  bg-azulScuro flex justify-between w-full  p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 gap-7">
            <p className="text-white">Total investimento</p>
            <p className="text-3xl text-white font-bold">KZ 5.700,00</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
            <BiMoneyWithdraw size={30} className="text-white" />
          </p>
        </div>
      </div>

      {/* Tabela */}
      <div className="flex flex-col overflow-x-auto">
        <div className="overflow-x-auto">
          <div className="flex justify-between py-3 pl-2">
            <div className="relative max-w-xs lg:ml-[1rem]">
              <label htmlFor="hs-table-search" className="sr-only">
                Pesquisar
              </label>
              <input
                onChange={(e) => setsearch(e.target.value)}
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full p-3 pl-10 text-sm border-gray-200
                 rounded-md focus:border-blue-500 focus:ring-blue-500
                  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                placeholder="Pesquisar..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
            <div className="bg-azulScuro p-2 rounded-[5px] lg:mr-[1rem]">

              {/* MODAL CADASTRAR */}

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
r                         ounded-[5px] bg-gray-100"
                          placeholder="Descrição"
                        />

                        <input
                          type="number"
                          className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                          rounded-[5px] bg-gray-100 mt-3"
                          placeholder="Valor"
                        />

                        <select className="w-full h-[2.8rem] text-ms mt-3 px-5 text-base">
                          <option value="opcao1 w-10" selected>Compras</option>
                          <option value="opcao2">Salário</option>
                          <option value="opcao3">Despesa</option>
                        </select>
                        <button className="bg-azulScuro w-full
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

          {/* Cabeçalho da tebela */}
          <div className="p-1.5 w-full inline-block align-middle ">
            <div className="overflow-hidden border rounded-lg overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-azulScuro">
                  <tr>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      Categoria
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      Valor
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-white uppercase "
                    >
                      Quantidade
                    </th>
                    <th
                      scope="col"
                      className="px-10 py-3 text-xs flex justify-end font-bold text-right text-white uppercase "
                    >
                      Data
                    </th>

                  </tr>
                </thead>

                {/* Corpo da tabela */}
                <tbody className="">
                  {data.filter((item) => (search === '' ? item : item.name.first.toLocaleLowerCase().includes(search) || item.name.last.toLocaleLowerCase().includes(search))).map((order, index) => (
                    <tr
                      key={index}
                      className="bg-white odd:bg-gray-200"
                    >

                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {order.name.last}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        jonne62@gmail.com
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        150.451,00Kz
                      </td>

                      <td className="px-[3rem] py-3 text-right  text-sm text-gray-800 whitespace-nowrap">
                        15
                      </td>

                      <td className="px-3 py-3 text-right text-sm text-gray-800 whitespace-nowrap">
                        <div className="flex text-center justify-end gap-5">

                          10 / 04 / 2023
                          <BsThreeDotsVertical className="cursor-pointer" />
                        </div>

                      </td>

                    </tr>
                  ))}

                </tbody>
              </table>
              <ReactPaginate
                previousLabel="previous"
                nextLabel="next"
                breakLabel="..."
                breakClassName="break-me"
                pageCount={Math.ceil(totalItems / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                subContainerClassName="pages pagination"
                activeClassName="active"
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Estoque;
