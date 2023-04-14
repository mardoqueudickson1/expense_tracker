/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { BiCategory, BiMoneyWithdraw } from 'react-icons/bi';

import {
  BsFillClipboardCheckFill,
} from 'react-icons/bs';

import Modal from '@/components/modal';
import ModalDel from '@/components/ModalDel';
import ModalEdit from '@/components/ModalEdit';
import { data } from '../data/data';

function Estoque() {
  const [dados, setDatas] = useState(data);

  // Pesquisa em tempo real
  const [search, setsearch] = useState('');

  const filteredData = data.filter((item) => item.name.last.toLowerCase().includes(search.toLowerCase()));

  // Paginação
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalItems = filteredData.length;
  const offset = currentPage * itemsPerPage;
  const currentPageData = filteredData.slice(offset, offset + itemsPerPage);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <div>

      <div className=" bg- bg-indigo-700 flex justify-between p-10 lg:px-14
    md:flex md:justify-between order-center"
      >
        <div className="text-white text-3xl relative -top-5 ">Visão</div>
        <div className="bg-indigo-800 p-4 w-[15rem] text-center rounded-lg
                  cursor-pointer text-white relative -top-5 flex justify-between"
        >

          <span className="sm: text-xs">Abril de 2023</span>

        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 p-4 -mt-[3.5rem] lg:mx-[2rem]">

        <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 gap-7">
            <p className="text-azulScuro">Ativos</p>
            <p className="text-3xl font-bold">120</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
            <BsFillClipboardCheckFill size={30} className="text-azulScuro" />
          </p>
        </div>

        <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 gap-7">
            <p className="text-azulScuro">Passivos</p>
            <p className="text-3xl font-bold">5.700</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
            <MdProductionQuantityLimits size={30} className="text-gree" />
          </p>
        </div>

        <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 gap-7">
            <p className="text-azulScuro ">Total funcionários</p>
            <p className="text-3xl  font-bold">20,000</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
            <BiCategory size={30} className=" text-azulScuro" />
          </p>
        </div>

        <div className="  bg-azulScuro flex justify-between w-full  p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 gap-7">
            <p className="text-white">Balanço total</p>
            <p className="text-3xl text-white font-bold">KZ 5.700,00</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
            <BiMoneyWithdraw size={30} className="text-white" />
          </p>
        </div>
      </div>

    </div>
  );
}

export default Estoque;
