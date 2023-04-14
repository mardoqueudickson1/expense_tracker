import React from 'react';
import {
  BsFillCaretRightFill, BsFillCaretLeftFill,
} from 'react-icons/bs';

function Navbar() {
  return (
    <div className=" bg- bg-indigo-700 flex justify-between p-10 lg:px-14
     md:flex md:justify-between item-center"
    >
      <div className="text-white text-3xl relative -top-5 ">Potter House</div>
      <div className="bg-indigo-800 p-4 w-[15rem] text-center rounded-lg
                   cursor-pointer text-white relative -top-5 flex justify-between"
      >
        <BsFillCaretLeftFill className="text-xs" />
        {' '}
        <span className="sm: text-xs">Abril de 2023</span>
        {' '}
        <BsFillCaretRightFill className="text-xs" />
      </div>
    </div>
  );
}

export default Navbar;
