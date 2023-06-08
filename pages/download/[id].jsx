import React, { useEffect, useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import Invoice from '../../utils/invoice/invoice';
import axios from '../../services/axios';
import { useRouter } from 'next/router';

const StockDetails = () => {
  const [data, setData] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const invoiceData = {
    id: '5df3180a09ea16dc4b95f910',
    invoice_no: '201906-28',
    balance: '$2,283.74',
    company: data.pessoa_receber,
    email: 'potterhouse@mail.com.com',
    phone: '+244 92424518745',
    address: 'Luanda, Lar do Patriota',
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

  const generatePdf = async () => {
    const blob = await pdf(<Invoice invoice={invoiceData} />).toBlob();
    saveAs(blob, 'nome_do_arquivo.pdf');
  };
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/empresa/filha/despacho/${id}`);
        const produto = response.data;
        setData(produto);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, [id]);

  return (
    <>
      {/* <div className=" flex justify-center items-center">
        <PDFViewer width="1000" height="1000" className="app">
          <Invoice invoice={invoiceData} />
        </PDFViewer>
      </div> */}

      <div className="p-4">
        <button onClick={generatePdf}>DOWNLOAD PDF</button>
      </div>
    </>
  );
};

export default StockDetails;
