/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { MdOutlineDeleteForever } from 'react-icons/md';

export default function Modal({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>

      <div><MdOutlineDeleteForever onClick={openModal} size={18} className=" right-5 cursor-pointer" /></div>

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

                <div className="flex justify-center gap-5 text-center p-10">
                  <button className="bg-red-600 p-3 w-[10rem] font-bold rounded-[5px] text-white">Apagar</button>
                  <button onClick={closeModal} className="bg-blue-600 p-3 w-[10rem] font-bold rounded-[5px] text-white">Cancelar</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
