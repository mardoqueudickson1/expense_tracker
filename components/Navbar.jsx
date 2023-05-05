import React from 'react';
import Link from 'next/link';
import { generateMonthlyTransactionsPDF } from '../utils/TransactionsPDF';
import { FiDownload } from 'react-icons/fi';
import { AiFillPlusCircle } from 'react-icons/ai'

function Navbar(props) {
  const { transacoes } = props;


  // Função que gera o PDF e faz o download
  async function downloadPDF() {
    const pdfBytes = await generateMonthlyTransactionsPDF(transacoes);

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'transacoes-mensais.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }


  return (
    <div className=" bg- bg-indigo-700 flex justify-between p-10 lg:px-14
     md:flex  item-center"
    >
      <div className="text-white text-3xl relative -top-5 font-bold">Potter House</div>



      <div className="flex justify-between -mt-[1rem]">

        <button onClick={downloadPDF} className="relative ml-3 z-0 inline-flex text-sm rounded-md shadow-sm  focus:z-10 focus:outline-none focus:ring-1">
          <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-azulScuro bg-white border border-gray-300 rounded-md sm:py-2">

            <div className="hidden sm:block">
              <FiDownload size={20} />
            </div>


          </span>
        </button>


        <button className="relative ml-3 z-0 inline-flex text-sm rounded-md shadow-sm  focus:z-10 focus:outline-none focus:ring-1">
          <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-azulScuro bg-white border border-gray-300 rounded-md sm:py-2">

          <Link href="cadastrar/transacao">   
          <AiFillPlusCircle  size={20} className="text-azulScuro right-5 cursor-pointer" />
          </Link>


          </span>
        </button>
      </div>



    </div>
  );
}



export default Navbar;
