import React, { useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { pdf } from '@react-pdf/renderer';
import FileSaver from 'file-saver';
import InvoiceTemplate from '../../../utils/invoice/invoice';
import easyinvoice from 'easyinvoice';

import { useRouter } from 'next/router';
import Loading from '@/components/Loading';
import axios from '../../../services/axios';
import { da } from 'date-fns/locale';

const StockDetailSaidas = () => {
  const [data, setData] = useState({});
  console.log('VVVVVVVVVVVVVV', data);
  var dados = {
    // Customize enables you to provide your own templates
    // Please review the documentation for instructions and examples
    customize: {
      //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html
    },
    images: {
      // The logo on top of your invoice
      logo: 'https://i.imgur.com/vbvMdAe.png',
      // The invoice background
      background: 'https://i.imgur.com/8dZ99Mp.png',
    },
    // Your own data
    sender: {
      company: 'Potter House',
      address: 'Lar do patriota, benfica',
      zip: '1234',
      email: 'test@gmail.com',
      city: 'Luanda',
      country: 'Angola',
    },
    // Your recipient
    client: {},
    information: {},

    products: [],
    // The message you would like to display on the bottom of your invoice
    'bottom-notice': 'Obrigado pela sua compra. Volte sempre',
    // Settings to customize your invoice
    settings: {
      currency: 'AOA', // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
    },
    // Translate your invoice to your preferred language
    translate: {
      invoice: 'FATURA',
      number: 'Nº de registro', // Defaults to 'Number'
      date: 'Data', // Default to 'Date'
      'due-date': 'Data de expiração', // Defaults to 'Due Date'
      subtotal: 'Sub-total', // Defaults to 'Subtotal'
      products: 'Produtos', // Defaults to 'Products'
      quantity: 'Quantidade', // Default to 'Quantity'
      price: 'Preço', // Defaults to 'Price'
      // "product-total": "Totaal", // Defaults to 'Total'
      // "total": "Totaal", // Defaults to 'Total'
      vat: 'iva', // Defaults to 'vat'
    },
  };

  if (data.lista_produtos) {
    dados.products = Object.entries(data.lista_produtos).map(
      ([key, value]) => ({
        quantity: value.quantity,
        description: value.nome,
        price: value.valor,
        'tax-rate': 14,
      })
    );

    dados.information = {
      number: data.registro_n,
      date: data.data_saida,
      'due-date': '31-12-2021',
    };
    dados.client = {
      company: data.pessoa_receber,
      address: data.pessoa_receber_endreco,
      zip: '4567 CD',
      city: 'Luanda',
      country: 'angola',
    };
  }
  //Create your invoice! Easy!
  const invoice = () => {
    const result = easyinvoice.createInvoice(dados);
    easyinvoice.download('potter-house-fatura.pdf', result.pdf);
  };

  const router = useRouter();
  const { id } = router.query;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [data2, setData2] = useState({});
  // let listaProdutosArray;
  // if (data.lista_produtos) {
  //   listaProdutosArray = Object.entries(data.lista_produtos).map(
  //     ([itemKey, item]) => ({
  //       [itemKey]: { ...item },
  //     })
  //   );
  // }

  const invoiceData = {
    empresa: 'The  Potter´s House',
    endereco: 'Luanda, belas, patriota',
    telefone: '+224 9251548745',
    email1: 'potterhouse@gmail.com',
    invoice_no: data.registro_n,
    balance: '$2,283.74',
    company: data.pessoa_receber,
    email: data.pessoa_receber_email,
    phone: data.pessoa_receber_telefone,
    address: data.pessoa_receber_endreco,
    trans_date: '20-11-2023',
    items: [],
  };

  if (data.lista_produtos) {
    invoiceData.items = Object.entries(data.lista_produtos).map(
      ([key, value]) => ({
        sno: value.sno,
        desc: value.desc,
        qty: value.qty,
        rate: value.rate,
        W: key,
      })
    );
  }

  const generatePdf = async () => {
    const blob = await pdf(<InvoiceTemplate invoice={invoiceData} />).toBlob();
    FileSaver.saveAs(blob, 'potter-house-registro-saida.pdf');
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

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
                onClick={invoice}
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
