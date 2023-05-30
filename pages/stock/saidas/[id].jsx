import React, { useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { pdf } from '@react-pdf/renderer';
import FileSaver from 'file-saver';
import InvoiceTemplate from '../../../utils/invoice/invoice';

import { useRouter } from 'next/router';
import Loading from '@/components/Loading';
import axios from '../../../services/axios';

const invoiceData = {
  id: '5df3180a09ea16dc4b95f910',
  invoice_no: '201906-28',
  balance: '$2,283.74',
  company: 'MANTRIX',
  email: 'susanafuentes@mantrix.com',
  phone: '+1 (872) 588-3809',
  address: '922 Campus Road, Drytown, Wisconsin, 1986',
  trans_date: '2019-09-12',
  due_date: '2019-10-12',
  items: [
    {
      sno: 1,
      desc: 'ad sunt culpa occaecat qui',
      qty: 5,
      rate: 405.89,
    },
    {
      sno: 2,
      desc: 'cillum quis sunt qui aute',
      qty: 5,
      rate: 373.11,
    },
    {
      sno: 3,
      desc: 'ea commodo labore culpa irure',
      qty: 5,
      rate: 458.61,
    },
    {
      sno: 4,
      desc: 'nisi consequat et adipisicing dolor',
      qty: 10,
      rate: 725.24,
    },
    {
      sno: 5,
      desc: 'proident cillum anim elit esse',
      qty: 4,
      rate: 141.02,
    },
  ],
};

const StockDetailSaidas = () => {
  const router = useRouter();
  const { id } = router.query;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});

  //   GERADOR DE PDF
  //     const generatePdf = async () => {
  //       const blob = await pdf(<InvoiceTemplate invoice={invoiceData} />).toBlob();
  //       const url = URL.createObjectURL(blob);
  //       window.open(url);
  //     };

  const generatePdf = async () => {
    const blob = await pdf(<InvoiceTemplate invoice={invoiceData} />).toBlob();
    FileSaver.saveAs(blob, 'potter-house-registro-saida.pdf');
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  //   const openPdfInNewWindow = async () => {
  //     const blob = await generatePdf();
  //     const url = URL.createObjectURL(blob);
  //     window.open(url, '_blank');
  //   };

  const closeModal = () => {
    setIsModalOpen(false);
    setData2(data);
  };

  const handleNameChange = (event) => {
    setData2({ nome: event.target.value });
  };

  const handleValorChange = (event) => {
    setData2({ valor: event.target.value });
  };

  const handleDescricaoChange = (event) => {
    setData2({ descricao: event.target.value });
  };

  const handlequantidadeChange = (event) => {
    setData2({ quantidade: event.target.value });
  };

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await axios.get(`/empresa/filha/despacho/${id}`);
        const produto = response.data;
        setData(produto);
        setData2(produto);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [id]);

  return (
    <div className="p-4">
      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="flex justify-center align-center mt-[4rem]">
                <div className="bg-white w-[25rem] p-5 rounded-[5px]">
                  <h1 className="text-center font-bold">Atualizar produto</h1>
                  <div className="mt-[2rem]">
                    <form action="">
                      <label htmlFor="">Nome</label>
                      <input
                        onChange={handleNameChange}
                        type="text"
                        value={data2.nome}
                        className="border w-full h-[2.8rem] p-5 text-sm rounded-[5px] bg-gray-100"
                        placeholder="Nome"
                      />

                      <label className="mt-5" htmlFor="">
                        Valor
                      </label>
                      <input
                        value={data2.valor}
                        onChange={handleValorChange}
                        type="number"
                        className="border  w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600 
                       rounded-[5px] bg-gray-100 "
                        placeholder="Quantidade"
                      />
                      <label className=" " htmlFor="">
                        Quantidade
                      </label>

                      <input
                        onChange={handlequantidadeChange}
                        value={data2.quantidade}
                        type="number"
                        className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                       rounded-[5px] bg-gray-100 "
                        placeholder="Valor"
                      />

                      <label className=" " htmlFor="">
                        Descrição
                      </label>
                      <input
                        onChange={handleDescricaoChange}
                        type="text"
                        value={data2.descricao}
                        className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                       rounded-[5px] bg-gray-100 "
                        placeholder="Detalhe"
                      />

                      <button
                        className="bg-azulScuro w-full
                  h-[2.8rem] text-white mt-3 rounded-[5px]"
                      >
                        Atualizar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 text-azulScuro px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <FaWindowClose
                  onClick={closeModal}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* FIM DOS MODAL */}
      <Loading isLoading={isLoading} />
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Histórico da saída do produto
        </h2>
        <div className="grid grid-cols-2 mx-[7rem]">
          <div className="flex justify-center items-center">
            <img src="/pngwing.com2.png" alt="Meu SVG" className="" />
          </div>

          <div className="">
            <p className="font-bold text-xl my-[2rem]">{data.nome_estoque}</p>
            <div className="flex gap-2">
              <p className="font-bold">ID: </p>{' '}
              <p className="text-gray-500">{data.id}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold">Quantidade: </p>{' '}
              <p className="text-gray-500">{data.quantidade}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold">Valor total: </p>{' '}
              <p className="text-gray-600">{data.valor_total}Kz</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold">Data de saída: </p>{' '}
              <p className="text-gray-600">{data.data_saida}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold">Nome do responsável: </p>{' '}
              <p className="text-gray-600">{data.responsavel_despacho}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold">Responsavel a receber: </p>{' '}
              <p className="text-gray-600">{data.pessoa_receber}</p>
            </div>

            <h1 className="font-bold text-xl my-[2rem]">Detalhe</h1>
            <p className="-my-[2rem] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              debitis! Illo molestiae nihil, eligendi, fuga accusantium eius,
              aspernatur dolorum velit iusto quas inventore laudantium
              architecto veniam qui soluta quae vitae!
            </p>

            <div className="flex my-[5rem]">
              <button
                className="bg-azulScuro hover:bg-gray-900 text-white font-bold py-2 px-4 mr-4 rounded"
                onClick={openModal}
              >
                Editar
              </button>

              <button
                onClick={generatePdf}
                className="bg-gray-800 hover:bg-azulScuro text-white font-bold py-2 px-4 mr-4 rounded"
              >
                Baixar comprovante
              </button>

              <button
                onClick={generatePdf}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Deletar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetailSaidas;
