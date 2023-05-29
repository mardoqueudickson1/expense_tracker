import React, { useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';

import { useRouter } from 'next/router';
import Loading from '@/components/Loading';
import axios from '../../services/axios';

const StockDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});

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

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await axios.get(`/empresa/filha/estoque/${id}`);
        const produto = response.data[0];
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
          Detalhes do produto
        </h2>
        <div className="grid grid-cols-2 mx-[7rem]">
          <div className="flex justify-center items-center">
            <img src="/pngwing.com.png" alt="Meu SVG" className="" />
          </div>

          <div className="">
            <p className="font-bold text-xl my-[2rem]">{data.nome}</p>
            <div className="flex gap-2">
              <p className="font-bold">ID: </p>{' '}
              <p className="text-gray-500">{data.id}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold">Quantidade: </p>{' '}
              <p className="text-gray-500">{data.quantidade}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold">Valor: </p>{' '}
              <p className="text-gray-600">{data.valor}Kz</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold">Categoria: </p>{' '}
              <p className="text-gray-600">{data.categoria}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold">fornecedor: </p>{' '}
              <p className="text-gray-600">{data.nome_fornecedor}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold">Telefone fornecedor: </p>{' '}
              <p className="text-gray-600">{data.telefone}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold">Endereço fornecedor: </p>{' '}
              <p className="text-gray-600">{data.endereco}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold">Data de registro: </p>{' '}
              <p className="text-gray-600">{data.updated_at}</p>
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
                onClick={openModal}
              >
                Editar
              </button>

              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-4 rounded">
                Despachar
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Deletar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetails;
