import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Invoice from '../utils/invoice/invoice';
// import axios from '../services/axios';
// import { useRouter } from 'next/router';

const StockDetails = () => {
  // const router = useRouter();
  // const { id } = router.query;

  const invoiceData = {
    id: '5df3180a09ea16dc4b95f910',
    invoice_no: '201906-28',
    balance: '$2,283.74',
    company: 'The Potter´s House ',
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

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await axios.get(`/empresa/filha/despacho/${id}`);
  //       const produto = response.data;
  //       setData(produto);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   getData();
  // }, [id]);

  return (
    <div className="p-4">
      <PDFViewer width="1000" height="600" className="app">
        <Invoice invoice={invoiceData} />
      </PDFViewer>
    </div>
  );
};

export default StockDetails;
