import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { BsFillClipboardCheckFill } from 'react-icons/bs';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { BiCategory, BiMoneyWithdraw } from 'react-icons/bi';
import { AiOutlineHistory, AiOutlineFileAdd } from 'react-icons/ai';
import { FaWindowClose } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

import axios from '../services/axios';
import Loading from '@/components/Loading';
import { generateMonthlyEstoquePDF } from '../utils/EstoquePDF';
import { useSelector } from 'react-redux';

// Formulário de muit-Step
function Step1({ produto, handleInputChange, handleGo }) {
  return (
    <>
      <div className="flex justify-center align-center mt-[1rem]">
        <div className="flex justify-center align-center mt-[4rem]">
          <div className="bg-white w-[25rem] p-5 rounded-[5px]">
            <h1 className="text-center font-bold">
              Cadastrar produto no estoque - 1º passo{' '}
            </h1>
            <div className="mt-[2rem]">
              <form>
                <label htmlFor="nome">Nome</label>

                <input
                  value={produto.nome}
                  name="nome"
                  onChange={handleInputChange}
                  type="text"
                  className="border w-full h-[2.8rem] p-5 text-sm
                                    rounded-[5px] bg-gray-100"
                  placeholder="nome"
                />
                <label htmlFor="categoria">Categoria</label>

                <input
                  value={produto.categoria}
                  name="categoria"
                  onChange={handleInputChange}
                  type="text"
                  className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 "
                  placeholder="Categoria"
                />
                <label htmlFor="valor">Valor</label>

                <input
                  value={produto.valor}
                  name="valor"
                  onChange={handleInputChange}
                  type="number"
                  className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100"
                  placeholder="Valor"
                />
                <label htmlFor="quantidade">Quantidade</label>
                <input
                  value={produto.quantidade}
                  name="quantidade"
                  onChange={handleInputChange}
                  type="number"
                  className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100"
                  placeholder="Quantidade"
                />

                <label htmlFor="descricao">Descrição</label>
                <textarea
                  value={produto.descricao}
                  name="descricao"
                  onChange={handleInputChange}
                  className="border w-full px-5 text-sm focus:ring-blue-600 rounded-[5px] bg-gray-100 "
                  placeholder="Detalhes do produto"
                ></textarea>

                <button
                  className="bg-gray-500 w-full h-[2.8rem] text-white mt-3 rounded-[5px]"
                  onClick={handleGo}
                >
                  Continuar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Step2({ produto, handleInputChange, handleGo2 }) {
  return (
    <>
      <div className="flex justify-center align-center mt-[1rem]">
        <div className="flex justify-center align-center mt-[4rem]">
          <div className="bg-white w-[25rem] p-5 rounded-[5px]">
            <h1 className="text-center font-bold">
              Dados do fornecedor - 2º passo{' '}
            </h1>
            <div className="mt-[2rem]">
              <form>
                <label htmlFor="nome">Nome</label>

                <input
                  value={produto.fornecedor ? produto.fornecedor.nome : ''}
                  name="fornecedor.nome"
                  onChange={handleInputChange}
                  type="text"
                  className="border w-full h-[2.8rem] p-5 text-sm
                                    rounded-[5px] bg-gray-100"
                  placeholder="nome"
                />
                <label htmlFor="telefone">Telefone</label>

                <input
                  name="fornecedor.telefone"
                  value={produto.fornecedor ? produto.fornecedor.telefone : ''}
                  onChange={handleInputChange}
                  type="text"
                  className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 "
                  placeholder="Telefone"
                />
                <label htmlFor="endereco">Endereço</label>
                <input
                  value={produto.fornecedor ? produto.fornecedor.endereco : ''}
                  name="fornecedor.endereco"
                  onChange={handleInputChange}
                  type="text"
                  className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 "
                  placeholder="Endereço"
                />

                <button
                  className="bg-gray-500 w-full h-[2.8rem] text-white mt-3 rounded-[5px]"
                  onClick={handleGo2}
                >
                  Continuar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Step3({ produto, handleBack, handleSubmit }) {
  const isLoading = useSelector((state) => state.auth.isLoadingButom);

  return (
    <div className="flex justify-center align-center mt-[4rem]">
      <div className="flex justify-center align-center mt-[4rem]">
        <div className="bg-white w-[25rem] p-5 rounded-[5px]">
          <h1 className="text-center font-bold">Confirme os dados</h1>
          <div className="mt-[2rem]">
            <p>
              <strong>Nome:</strong> {produto.nome}
            </p>
            <p>
              <strong>Categoria:</strong> {produto.categoria}
            </p>
            <p>
              <strong>Valor:</strong> {produto.valor}
            </p>

            <p>
              <strong>Quantidade:</strong> {produto.quantidade}
            </p>

            <p>
              <strong>Nome fornecedor:</strong> {produto.fornecedor.nome}
            </p>

            <p>
              <strong>Telefone fornecdor:</strong> {produto.fornecedor.telefone}
            </p>

            <p>
              <strong>endereço fornecdor:</strong> {produto.fornecedor.enderco}
            </p>

            <button
              className="bg-gray-500 text-white w-full h-[2.8rem] rounded-[5px] mt-3"
              onClick={handleBack}
            >
              Voltar
            </button>
            <button
              onClick={handleSubmit}
              className={`bg-azulScuro w-full lg:focus:focus:ring-blue-600 h-[2.8rem] ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              } text-white mt-3 rounded-[5px `}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-50"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 018 4.337v-.006l.008-.007A8 8 0 0117.663 10H12v2h6.196A7.965 7.965 0 0112 19.663v-2.002zm-4-2.002A7.965 7.965 0 014 12H1.021A10.04 10.04 0 0012 22.979V20H5.291v-2.002z"
                    />
                  </svg>
                  Processando...
                </div>
              ) : (
                'Cadastrar produto'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Table() {
  // ESTADOS DO FORMULÀRIO
  const [totalProdutoCadatrados, setTotalProdutosCadastrados] = useState('');
  const [totalValorPro, setTotalValorPro] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [produto, setProduto] = useState({
    nome: '',
    valor: '',
    quantidade: '',
    descricao: '',
    fornecedor: { nome: '', telefone: '', endereco: '' },
  });

  const [refreshData, setRefreshData] = useState(false);
  const [estoque, setEstoque] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [fieldName, subFieldName] = name.split('.');

    if (subFieldName) {
      setProduto((prevState) => ({
        ...prevState,
        [fieldName]: {
          ...prevState[fieldName],
          [subFieldName]: value,
        },
      }));
    } else {
      setProduto((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleGo = (e) => {
    e.preventDefault();

    if (
      !produto.nome ||
      !produto.categoria ||
      !produto.valor ||
      !produto.quantidade ||
      !produto.descricao
    ) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    setStep(2);
  };

  const handleGo2 = (e) => {
    e.preventDefault();

    if (!produto.fornecedor) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    setStep(3);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Pesquisa em tempo real
  const [search, setsearch] = useState('');

  const filteredData = estoque.filter((item) =>
    item.nome.toLowerCase().includes(search.toLowerCase())
  );

  // Paginação
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalItems = filteredData.length;
  const offset = currentPage * itemsPerPage;
  const currentPageData = filteredData.slice(offset, offset + itemsPerPage);

  //FUNCOES

  const closeModal = () => {
    setIsModalOpen(false);
    setProduto({});
    setStep(1);
  };
  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/empresa/filha/estoque');
      const response2 = await axios.get('/empresa/filha/totalprodcadstradaos');
      const response3 = await axios.get('/empresa/filha/totalvalor');

      setIsLoading(false);
      setTotalValorPro(response3.data);
      setTotalProdutosCadastrados(response2.data);
      setEstoque(response.data);
    } catch (error) {
      console.error(error);
      // Lida com erros durante a requisição
    }
  };

  const sendData = async () => {
    try {
      //converte os dados
      const Valor = parseFloat(produto.valor);
      const Quantidade = parseFloat(produto.quantidade);

      await axios.post('/empresa/filha/estoque', {
        nome: produto.nome,
        categoria: produto.categoria,
        valor: Valor,
        quantidade: Quantidade,
        descricao: produto.descricao,
        fornecedor: produto.fornecedor,
      });
    } catch (error) {
      console.error(error);
      // Lida com erros durante a requisição
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendData();
    setIsLoading(true);
    await fetchData();
    setIsLoading(false);
    setIsModalOpen(false);
    setIsModalOpen(false);
    setStep(1);
    toast.success('Produto cadastrado com sucesso.');
  };

  useEffect(() => {
    if (refreshData) {
      fetchData();
      setRefreshData(false); // Reseta o valor de refreshData para evitar loop infinito
    }
  }, [refreshData]);

  // Função que gera o PDF e faz o download
  async function downloadPDF() {
    const pdfBytes = await generateMonthlyEstoquePDF(estoque);

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'potter-house-estoque.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  const renderForm = (step) => {
    switch (step) {
      case 1:
        return (
          <div className="">
            <Step1
              produto={produto}
              handleInputChange={handleInputChange}
              handleGo={handleGo}
            />
          </div>
        );

      case 2:
        return (
          <div className="">
            <Step2
              produto={produto}
              handleInputChange={handleInputChange}
              handleGo2={handleGo2}
            />
          </div>
        );

      case 3:
        return (
          <div>
            <Step3
              produto={produto}
              handleSubmit={handleSubmit}
              handleBack={() => setStep(1)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
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
              <div>{renderForm(step)}</div>
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
      <div className="flex flex-col ">
        <div className="overflow-x-auto">
          <div className="flex justify-between py-3 lg:mx-[1rem]">
            <div className="relative max-w-xs">
              <label htmlFor="hs-table-search" className="sr-only">
                Pesquisar...
              </label>
              <input
                onChange={(e) => setsearch(e.target.value)}
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                placeholder="Pesquisar..."
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

            <div className="flex items-center space-x-2 gap-5 ">
              <div className="relative gap-5 ">
                <Link href="/estoque/despacho">
                  <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                    <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                      <div className="hidden sm:block">
                        <AiOutlineHistory size={20} />
                      </div>
                    </span>
                  </button>
                </Link>

                <button
                  onClick={openModal}
                  className="relative ml-3 z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1"
                >
                  <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                    <div className="hidden sm:block">
                      <AiOutlineFileAdd size={20} />
                    </div>
                  </span>
                </button>
                <button
                  onClick={downloadPDF}
                  className="relative ml-3 z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1"
                >
                  <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                    <div className="hidden sm:block">
                      <FiDownload size={20} />
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-4   lg:mx-[1rem]">
        <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 gap-7">
            <p className="text-azulScuro">Total produto cadastrados</p>
            <p className="text-3xl font-bold">{totalProdutoCadatrados.total}</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
            <BsFillClipboardCheckFill size={30} className="text-azulScuro" />
          </p>
        </div>

        <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 gap-7">
            <p className="text-azulScuro">Total produtos em estoque</p>
            <p className="text-3xl font-bold">45</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
            <MdProductionQuantityLimits size={30} className="text-gree" />
          </p>
        </div>

        <div className="  bg-white flex justify-between w-full  p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 gap-7">
            <p className="text-azulScuro ">Produtos despachados</p>
            <p className="text-3xl  font-bold">85</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
            <BiCategory size={30} className=" text-azulScuro" />
          </p>
        </div>

        <div className="  bg-azulScuro flex justify-between w-full  p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 gap-7">
            <p className="text-white">Total investimento</p>
            <p className="text-3xl text-white font-bold">
              {totalValorPro.valor}
            </p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg -mt-[4rem]">
            <BiMoneyWithdraw size={30} className="text-white" />
          </p>
        </div>
      </div>

      <div className="min-w-full my-10 overflow-x-auto border rounded-md shadow-sm dark:border-gray-700 mt-[2rem]">
        <table className="min-w-full bg-white rounded whitespace-nowrap w-full">
          <thead className="border-b bg-gray-50">
            <tr className="">
              <th className="px-3 py-3 text-xs font-bord text-left text-gray-500 uppercase align-middle">
                Nº produto
              </th>
              <th className="px-3 py-3 text-xs font-bord text-left text-gray-500 uppercase align-middle">
                Nome
              </th>
              <th className="px-3 py-3 text-xs font-bord text-left text-gray-500 uppercase align-middle">
                Categoria
              </th>
              <th className="px-3 py-3 text-xs font-bord text-left text-gray-500 uppercase align-middle">
                Valor
              </th>
              <th className="px-3 py-3 text-xs font-bord text-left text-gray-500 uppercase align-middle">
                Quantidade
              </th>

              <th className="px-3 py-3 text-xs font-bord text-right  text-gray-500 uppercase align-middle">
                Sub-total
              </th>
              <th className="px-3 py-3 text-xs font-bord text-right text-gray-500 uppercase align-middle">
                Data de registro
              </th>
              <th className="px-3 py-3 text-xs font-bord text-left text-gray-500 uppercase align-middle"></th>
            </tr>
          </thead>

          <tbody className="text-sm bg-white divide-y divide-gray-200">
            {currentPageData.map((item, index) => (
              <tr key={index}>
                <td className="px-3 py-4 text-gray-600 ">{item.n_transacao}</td>
                <Link href={`stock/${item.id}`}>
                  <td className="px-3 py-4 cursor-pointer text-gray-600 hover:text-blue-500 ">
                    {item.nome}
                  </td>
                </Link>

                <td className="px-3 py-4 text-gray-500 ">{item.categoria}</td>
                <td className="px-3 py-4 text-gray-600 "> {item.valor} </td>
                <td className="px-3 py-4 text-gray-600">{item.quantidade}</td>
                <td className="px-3 py-4 text-right text-gray-500 ">
                  {item.valor_total}
                </td>
                <td className="px-3 py-4 text-right text-gray-500 ">
                  {item.data_formatada}
                </td>

                <td className="w-20 px-3 py-2 text-center text-gray-500 ">
                  <div className="flex place-content-center">
                    <Link href={`stock/${item.id}`}>
                      {' '}
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel="anterior"
          nextLabel="próximo"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={Math.ceil(totalItems / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="flex bg-white border rounded-lg overflow-hidden"
          pageClassName="cursor-pointer mx-1 px-3 py-2 border "
          pageLinkClassName="block"
          previousClassName="cursor-pointer mx-1 px-3 py-2 border bg-white"
          previousLinkClassName="block"
          nextClassName="cursor-pointer mx-1 px-3 py-2 border bg-AzulScuro"
          nextLinkClassName="block"
          activeClassName="bg-azulScuro text-white "
        />
      </div>
    </>
  );
}
