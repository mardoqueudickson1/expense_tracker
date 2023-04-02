import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {FaUserCircle} from  'react-icons/fa'
import {FiSearch} from  'react-icons/fi'
import Header from '../components/admin/header'

import { data } from '../data/data.js';

const orders = () => {

  const [search, setsearch] = useState('')

  return (
    <>
    <Header />
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-4 pt-4 '>
        <h1>Pedidos de agendamento</h1>
       
        <form action="" autoComplete='off'>
          
            <div className='flex flex-row justify-start items-center'>
              <FiSearch className='w-5 h-5' />
              <input onChange={(e) => setsearch(e.target.value)}
              type="search"
              autoComplete='off'
              id='search-field'
              placeholder='pesquisar'
              className="flex-1 border-none bg-white
              autline-none placeholder-gray-500 text-base px-2 rounded-lg"
               />
            </div>
        </form>
      </div>

      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Nome completo</span>
            <span className='sm:text-left text-right'>Status</span>
            <span className='hidden md:grid'>últimas</span>
            <span className='hidden sm:grid'>Data</span>
          </div>
          <ul>
            {data.filter((item) =>{
               
              return search === '' ? item : item.name.first.toLowerCase().includes(search) || item.name.last.includes(search) 
            } ).map((order, id) => (
              <li
                key={id}
                className='bg-gray-100 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div >
                    <FaUserCircle  size={30} className='text-purple-800 w-full' />
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                      {order.name.first + ' ' + order.name.last}
                    </p>
                    <p className='text-gray-800 text-sm'>{order.name.first}@gmail.com</p>
                  </div>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>
                  <span
                    className={
                      order.status == 'Processando'
                        ? 'bg-green-200 p-2 rounded-lg'
                        : order.status == 'Completado'
                        ? 'bg-blue-200 p-2 rounded-lg'
                        : 'bg-yellow-200 p-2 rounded-lg'
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className='hidden md:flex'>{order.date}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default orders;
