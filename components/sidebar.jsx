import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import Link from 'next/link';
import { FaSignOutAlt } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import UserProfile from './userProfile';
import { SidebarData } from '@/data/data';
import { useDispatch } from 'react-redux';
import * as actions from '../store/modules/auth/actions';

const sidebar = ({ children }) => {
  const dispatch = useDispatch();
  //Desloga o usuário
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
  };
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex h-screen">
      <div
        className={` ${
          !toggle ? 'w-72' : 'w-20'
        } h-screen bg-azulScuro  relative duration-300`}
      >
        <UserProfile toggle={!toggle} />
        <div
          className={`${
            !toggle ? 'ml-[14rem] rotate-180' : 'ml-[4rem]'
          } absolute cursor-pointer
             rounded-full top-[5.7rem] border-2
               border-gray-800 duration-300 bg-white`}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <BiChevronRight className="text-2xl  z-10" />
        </div>

        <Link href="/">
          <div
            className={`relative z-0 flex top-10 item-center p-4 mt-4 gap-4 duration-300 text-white
            hover:bg-testeAzul cursor-pointer rounded-lg ${
              !toggle && ' hover:bg-testeAzul'
            } `}
          >
            <MdDashboard size={25} />
            <span className={`${toggle && 'hidden'}`}>Dashboard</span>
          </div>
        </Link>
        {SidebarData.map((item, index) => (
          <Link href={item.heading} key={index}>
            <div
              className={`relative z-0 flex top-10 item-center p-4 mt-4 gap-4 duration-300 text-white
            hover:bg-testeAzul cursor-pointer rounded-lg ${
              !toggle && ' hover:bg-testeAzul'
            } `}
            >
              <item.icon size={25} />
              <span className={`${toggle && 'hidden'}`}>{item.heading}</span>
            </div>
          </Link>
        ))}

        <div className="text-white p-4 mt-[10rem] cursor-pointer ">
          <Link href="/" onClick={handleLogout}>
            <FaSignOutAlt size={25} />
          </Link>
        </div>
      </div>

      <main className="w-full bg-gray-200 overflow-y-scroll">{children}</main>
    </div>
  );
};

export default sidebar;
