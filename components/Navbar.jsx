import React, { useState } from 'react';
import { generateMonthlyTransactionsPDF } from '../utils/TransactionsPDF';
import { FiDownload } from 'react-icons/fi';

function Navbar(props) {
 const { transacoes }  = props;


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
      <div className="text-white text-3xl relative -top-5 ">Potter House</div>


      <div onClick={downloadPDF} className="bg-indigo-800 text-sm gap-4 p-4 w-[11rem] text-center rounded-lg cursor-pointer text-white relative -top-5 flex "
      >
        
       Baixar transacões

       <FiDownload />
      
      </div>
    </div>
  );
}
  


export default Navbar;
