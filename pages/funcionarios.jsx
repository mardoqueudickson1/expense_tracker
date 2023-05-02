import React from "react";
import { BsPersonFillAdd } from 'react-icons/bs'

export default function Table() {
    return (
      <>
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="flex justify-between py-3 pl-2">
                    <div className="relative max-w-xs">
                        <label htmlFor="hs-table-search" className="sr-only">
                            Search
                        </label>
                        <input
                            type="text"
                            name="hs-table-search"
                            id="hs-table-search"
                            className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                            placeholder="Search..."
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

                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                                <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                                    
                                    <div className="hidden sm:block">
                                        <BsPersonFillAdd  size={20}/>
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>

  
            <div className="min-w-full my-10 overflow-x-auto border rounded-md shadow-sm dark:border-gray-700">
                <table className="min-w-full bg-white rounded whitespace-nowrap w-full">
                    <thead className="border-b bg-gray-50">
                        <tr className="">
                            <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                                Nome completedo
                            </th>
                            <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">Nº funcionário</th>
                            <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">Data de nascimento</th>
                            <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">Telefone</th>
                            <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">Status</th>
                            <th className="px-3 py-3 text-xs font-normal text-right text-gray-500 uppercase align-middle">Salário</th>
                            <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle"></th>
                        </tr>
                    </thead>
                    <tbody className="text-sm bg-white divide-y divide-gray-200">
                        <tr>
                            <td className=" px-3 py-4 ">
                            <div className="flex items-center w-max">
                                    <img width="50" height="50" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=200&amp;w=200&amp;s=3e378252a934e660f231666b51bd269a" alt="avatar" />
                                    <div className="ml-4">
                                        <div>Mardooqueu Dickson</div>
                                        <div className="text-sm text-gray-400">chase@anothercompany.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-3 py-4 text-gray-600 ">#102-325-2565</td>
                            <td className="px-3 py-4 text-gray-500 ">May 07, 2021</td>
                            <td className="px-3 py-4 text-gray-600 ">
                                +244 928241548
                            </td>
                            <td className="px-3 py-4 text-green-600">
                                Ativo
                            </td>
                            <td className="px-3 py-4 text-right text-gray-500 ">125.000,00Kz</td>
                            <td className="w-20 px-3 py-2 text-center text-gray-500 ">
                                <div className="flex place-content-center">
                                    <a href="#!">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
      
</>
    );
}

