import React, { useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading';
import axios from '../../services/axios';

const StockDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);

    // const DeleteData = async (e) => {
    //   e.preventDefault();
    //   await axios.delete(`/empresa/filha/estoque/${id}`, data2);
    //   setIsModalOpen(false);
    //   getData();
    //   router.push('/Estoque');
    //   toast.success('Produto apagado com sucesso');
    // };
  };

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalOpen2(false);
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

  const getData = async function getData() {
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
  };
  useEffect(() => {
    getData();
  }, []);

  const updateData = async (e) => {
    e.preventDefault();
    await axios.put(`/empresa/filha/estoque/${id}`, data2);
    setIsModalOpen(false);
    getData();
    toast.success('Produto atualizado com sucesso');
  };

  const DeleteData = async (e) => {
    e.preventDefault();
    await axios.delete(`/empresa/filha/estoque/${id}`, data2);
    setIsModalOpen(false);
    getData();
    router.push('/Estoque');
    toast.success('Produto apagado com sucesso');
  };

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
                        onClick={updateData}
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

      {/* MODAL */}
      {isModalOpen2 && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Tem certeza que quer deletar o produto?
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          É importante lembrar que essa acção é irreversível.
                          Certifique-se de que realmente deseja remover o
                          produto, pois todos os dados associados a ele serão
                          perdidos permanentemente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    onClick={DeleteData}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Deletar
                  </button>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancelar
                  </button>
                </div>
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
              <button
                onClick={openModal2}
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

export default StockDetails;
