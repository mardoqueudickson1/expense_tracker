/* eslint-disable react/no-array-index-key */
import React from 'react';



function Transações(props) {
   
  const {transacoes} = props;
 
 
  return (
    <>
    
      
      <div className="w-full col-span-1 relative lg:h-[62vh] h-[50vh] m-auto md:col-span-2 p-4 border rounded-lg bg-white overflow-scroll">

      
        <table className="border-collapse w-full overflow-scroll overflow-x-auto">
          <thead>
            <tr>
              <th className="border-b border-gray-300 text-left py-2 px-3 uppercase font-medium text-sm text-gray-600">Data</th>
              <th className="border-b border-gray-300  py-2 px-3 uppercase font-medium text-sm text-gray-600">Descrição</th>
              <th className="border-b border-gray-300 text-right py-2 px-3 uppercase font-medium text-sm text-gray-600">Valor</th>
            </tr>
          </thead>
          <tbody>

            {transacoes.map((item, index) => (

              <tr key={index}>
                <td className="border-b border-gray-300  py-2 px-3 text-sm text-gray-600 whitespace-nowrap">{item.data_formatada}</td>
                <td className="border-b border-gray-300 text-center py-2 px-3 text-sm text-gray-600 whitespace-nowrap">{item.descricao}</td>
                <td className="border-b border-gray-300 text-right py-2 px-3 text-green-500 text-sm whitespace-nowrap">
                {item.tipo === 'despesa' ? (
                <span className="text-red-600">
                  -
                  {item.valor} Kz
                </span>
              ) : (
                <span>
                  +
                  {item.valor} Kz

                </span>
              )}
                  </td>
              </tr>
            ))}


          </tbody>
        </table>


      </div>

    </>
  );
}

export default Transações;






