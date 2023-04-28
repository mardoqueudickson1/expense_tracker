/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FaWindowClose } from 'react-icons/fa';

export default function Modal({ children, toggle }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(toggle)

    
  if(toggle){
    setIsModalOpen(false)
  }
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>

      <div><AiFillPlusCircle onClick={openModal} size={25} className="text-white right-5 cursor-pointer" /></div>

      {isModalOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75" />
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {children}

              <div className="bg-gray-50 text-azulScuro px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <FaWindowClose onClick={closeModal} className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
