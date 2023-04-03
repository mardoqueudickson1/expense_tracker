import React from 'react';
import Link from 'next/link';
import { SidebarData } from '../../../data/data'
import { RxSketchLogo } from 'react-icons/rx';




const sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-gray-800 border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className=' bg-gray-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={35} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>

          {SidebarData.map((item, index) => {
            return (

              
                <div className=' group bg-gray-800 transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110  text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
                  <Link href={item.heading}>
                  <item.icon size={25} />
                  </Link>
                  <span class="absolute top-10 scale-0 transition-all rounded bg-gray-900 p-2 text-xs text-white group-hover:scale-100">{item.heading}</span>

                </div>
              
            )
          })}
        </div>
      </div>
      <main className='ml-20 w-full  '>{children}</main>

    </div >
  );
};

export default sidebar;





