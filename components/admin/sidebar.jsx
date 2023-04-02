import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { FaTasks } from 'react-icons/fa';


const sidebar = ({ children }) => {
    return (
        <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
          <div className='flex flex-col items-center'>
            <Link href='/'>
              <div className='bg-gray-800 text-white p-3 rounded-lg inline-block'>
                <RxSketchLogo size={20} /> 
              </div>

            </Link>
            <span className='border-b-[1px] border-gray-300 w-full p-2'></span>
            <Link href='/'>
              <div className='flex'>
                 <div className='bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                <RxDashboard size={20} />
              </div>

             
              </div>
             

            </Link>

            <Link href='/funcionarios'>
              <div className='bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                <RxPerson size={20} />
              </div>
            </Link>

            <Link href='/pedidos'>
              <div className='bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                <FaTasks size={20} />
              </div>
            </Link>
            <Link href='/'>
              <div className='bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                <FiSettings size={20} />
              </div>
            </Link>
          </div>
        </div>
    <main className='ml-20 w-full '>{children}</main>

</div >
);
};

export default sidebar;