import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { AiOutlineFileAdd } from 'react-icons/ai';

import { FaWindowClose } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

import axios from '../../services/axios';
import Loading from '../../components/Loading';
import { generateMonthlyEstoquePDF } from '../../utils/EstoquePDF';
import { useSelector } from 'react-redux';

// Formulário de muit-Step

function Step4({ selectedProducts, total, handleGo }) {
  return (
    <div className="flex justify-center align-center mt-[4rem]">
      {/* Resto do código... */}
      <div className="mt-[2rem]">
        <div>
          <h2> {total} Produtos selecionados:</h2>
          {selectedProducts.map((productId) => {
            return (
              <div className="grid grid-cols-3 gap-4 mt-1" key={productId.id}>
                <p className="font-bold">
                  <span className="text-gray-600">Nome:</span> {productId.nome}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Valor:</span> {productId.valor}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Quantidade:</span>{' '}
                  {productId.quantity}
                </p>
                {/* Renderize outros atributos do produto selecionado */}
              </div>
            );
          })}
        </div>
        <button
          className="bg-gray-500 w-full h-[2.8rem] text-white mt-3 rounded-[5px]"
          onClick={handleGo}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

function Step2({ produto, handleInputChange, handleGo2, handleBack }) {
  return (
    <>
      <div className="flex justify-center align-center mt-[1rem]">
        <div className="flex justify-center align-center mt-[4rem]">
          <div className="bg-white w-[25rem] p-5 rounded-[5px]">
            <h1 className="text-center font-bold">
              Dados do receptor - 2º passo{' '}
            </h1>
            <div className="mt-[2rem]">
              <form>
                <label htmlFor="nome">Nome</label>

                <input
                  value={
                    produto.pessoa_receber ? produto.pessoa_receber.nome : ''
                  }
                  name="pessoa_receber.nome"
                  onChange={handleInputChange}
                  type="text"
                  className="border w-full h-[2.8rem] p-5 text-sm
                                    rounded-[5px] bg-gray-100"
                  placeholder="nome"
                />
                <label htmlFor="telefone">Telefone</label>
                <input
                  name="pessoa_receber.telefone"
                  value={
                    produto.pessoa_receber
                      ? produto.pessoa_receber.telefone
                      : ''
                  }
                  onChange={handleInputChange}
                  type="text"
                  className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 "
                  placeholder="Telefone"
                />

                <label htmlFor="telefone">Email</label>
                <input
                  name="pessoa_receber.email"
                  value={
                    produto.pessoa_receber ? produto.pessoa_receber.email : ''
                  }
                  onChange={handleInputChange}
                  type="text"
                  className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 "
                  placeholder="Email"
                />

                <label htmlFor="endereco">Endereço</label>
                <input
                  value={
                    produto.pessoa_receber
                      ? produto.pessoa_receber.endereco
                      : ''
                  }
                  name="pessoa_receber.endereco"
                  onChange={handleInputChange}
                  type="text"
                  className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 "
                  placeholder="Endereço"
                />

                <label htmlFor="endereco">Data de saída</label>
                <input
                  value={produto ? produto.data : ''}
                  name="data"
                  onChange={handleInputChange}
                  type="date"
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
                <button
                  className="bg-gray-800 text-white w-full h-[2.8rem] rounded-[5px] mt-3"
                  onClick={handleBack}
                >
                  Voltar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Step3({ produto, handleBack, handleSubmit, selectedProducts, total }) {
  const isLoading = useSelector((state) => state.auth.isLoadingButom);

  return (
    <div className="flex justify-center align-center mt-[4rem]">
      <div className="flex justify-center align-center mt-[4rem]">
        <div className="bg-white w-[25rem] p-5 rounded-[5px]">
          <h1 className="text-center font-bold">Confirme os dados</h1>
          <div className="mt-[2rem]">
            <h2> {total} Produtos selecionados:</h2>
            {selectedProducts.map((productId) => {
              return (
                <div className="grid grid-cols-3 gap-4 mt-1" key={productId.id}>
                  <p className="font-bold">
                    <span className="text-gray-600">Nome:</span>{' '}
                    {productId.nome}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">Valor:</span> {productId.valor}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">Quantidade:</span>{' '}
                    {productId.quantity}
                  </p>
                  {/* Renderize outros atributos do produto selecionado */}
                </div>
              );
            })}

            <p>
              <strong>Nome receptor:</strong> {produto.pessoa_receber.nome}
            </p>

            <p>
              <strong>Telefone receptor:</strong>{' '}
              {produto.pessoa_receber.telefone}
            </p>

            <p>
              <strong>Email receptor:</strong> {produto.pessoa_receber.email}
            </p>

            <p>
              <strong>endereço receptor:</strong>{' '}
              {produto.pessoa_receber.endereco}
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
  // ESTADOS
  const user = useSelector((state) => state.auth.user);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [productQuantities, setProductQuantities] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [disableEditing, setDisableEditing] = useState(true);
  const [refreshData, setRefreshData] = useState(false);
  const [estoque, setEstoque] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [produto, setProduto] = useState({
    pessoa_receber: {
      nome: '',
      telefone: '',
      email: '',
      endereco: '',
      dana: totalQuantity,
    },
    lista_produtos: [],
    data: '',
  });

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

  console.log('LISTAAAAAAAAAAA:', produto.lista_produtos);
  const toggleEditing = () => {
    setDisableEditing(!disableEditing);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const handleSelectProduct = (product, id) => {
    toggleEditing();
    setSelectedProductId(id);

    // Verifique se o produto já está selecionado
    const isSelected = selectedProducts.some(
      (selectedProduct) => selectedProduct.id === product.id
    );

    if (isSelected) {
      // Se o produto já estiver selecionado, remova-o da lista de selecionados
      setSelectedProducts( 
        selectedProducts.filter(
          (selectedProduct) => selectedProduct.id !== product.id
        )
      );
    } else {
      // Caso contrário, adicione o produto à lista de selecionados
      setSelectedProducts([...selectedProducts, product]);
    }

    setProduto((prev) => ({
      ...prev,
      lista_produtos: selectedProducts,
    }));
  };

  const updateSelectedProducts = () => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        const quantity = productQuantities[product.id] || 0;
        return {
          ...product,
          quantity: quantity,
        };
      });

      return updatedProducts;
    });
  };

  const handleQuantityChange = (productId, quantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));

    // Calcular a quantidade total
    const updatedTotalQuantity = Object.values(productQuantities)
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0);

    setTotalQuantity(updatedTotalQuantity);

    updateSelectedProducts(); // Chamar aqui, após o setProductQuantities
  };

  useEffect(() => {
    // Função executada sempre que o estado productQuantities for alterado
    updateSelectedProducts();

    // Calcular a quantidade total
    const updatedTotalQuantity = Object.values(productQuantities)
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0);

    setTotalQuantity(updatedTotalQuantity);
  }, [productQuantities]);

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

  const handleGo2 = (e) => {
    e.preventDefault();

    if (!produto.pessoa_receber) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    setStep(3);
  };

  const openModal = () => {
    setStep(4);

    setIsModalOpen(true);
  };

  //FUNCOES

  const closeModal = () => {
    setIsModalOpen(false);
    setProduto({});
    setSelectedProducts([]);
    setProductQuantities({});
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

      setIsLoading(false);

      setEstoque(response.data);
    } catch (error) {
      console.error(error);
      // Lida com erros durante a requisição
    }
  };

  const sendData = async () => {
    try {
      //converte os dados
      const updatedSelectedProducts = selectedProducts.map((product) => ({
        ...product,
        quantity: parseInt(product.quantity),
      }));

      await axios.post('/empresa/filha/despacho', {
        data_saida: produto.data,
        responsavel_despacho: user.nome,
        lista_produtos: updatedSelectedProducts,
        pessoa_receber: produto.pessoa_receber,
        quantidade: selectedProducts.length,
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
    toast.success('Produto despachado com sucesso.');
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
      case 2:
        return (
          <div className="">
            <Step2
              produto={produto}
              handleInputChange={handleInputChange}
              handleGo2={handleGo2}
              handleBack={() => setStep(4)}
            />
          </div>
        );

      case 3:
        return (
          <div>
            <Step3
              produto={produto}
              handleSubmit={handleSubmit}
              handleBack={() => setStep(2)}
              selectedProducts={selectedProducts}
              total={selectedProducts.length}
            />
          </div>
        );

      case 4:
        return (
          <div>
            <Step4
              selectedProducts={selectedProducts}
              handleGo={() => setStep(2)}
              total={selectedProducts.length}
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
      <div className=" text-center font-bold text-3xl text-gray-900 my-3">
        <h1>Despachar produto</h1>
      </div>
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

      <div className="min-w-full my-10 overflow-x-auto border rounded-md shadow-sm dark:border-gray-700 mt-[2rem]">
        <table className="min-w-full bg-white rounded whitespace-nowrap w-full">
          <thead className="border-b bg-gray-50">
            <tr className="">
              <th className="px-3 py-3 text-xs font-bord text-left text-gray-500 uppercase align-middle">
                Selecionar
              </th>
              <th className="px-3 py-3 text-xs font-bord text-left text-gray-500 uppercase align-middle">
                Nº registro
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

              <th className="px-3 py-3 text-xs font-bord text-gray-500 uppercase align-middle">
                Disponíveis
              </th>
              <th className="px-3 py-3 text-xs font-bord text-right text-gray-500 uppercase align-middle">
                quantidade
              </th>
              <th className="px-3 py-3 text-xs font-bord text-left text-gray-500 uppercase align-middle"></th>
            </tr>
          </thead>

          <tbody className="text-sm bg-white divide-y divide-gray-200">
            {currentPageData.map((item, index) => (
              <tr key={index}>
                <td className="px-3 py-4 ">
                  <input
                    type="checkbox"
                    checked={selectedProducts.some(
                      (selectedProduct) => selectedProduct.id === item.id
                    )}
                    onChange={() => handleSelectProduct(item, item.id)}
                  />
                </td>
                <td className="px-3 py-4 text-gray-600 ">{item.n_transacao}</td>
                <Link href={`stock/${item.id}`}>
                  <td className="px-3 py-4 cursor-pointer text-gray-600 hover:text-blue-500 ">
                    {item.nome}
                  </td>
                </Link>

                <td className="px-3 py-4 text-gray-500 ">{item.categoria}</td>
                <td className="px-3 py-4 text-gray-600 "> {item.valor} </td>
                <td className="px-3 py-4 text-center text-gray-600 ">
                  {item.quantidade}x
                </td>

                <td className="px-3 py-4 text-right">
                  <input
                    type="number"
                    value={productQuantities[item.id] || ''}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    className="w-16 px-2 py-1 border border-gray-300 rounded-md"
                    disabled={selectedProductId !== item.id}
                  />
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
