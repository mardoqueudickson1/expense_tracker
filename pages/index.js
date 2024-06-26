import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import TopCards from '@/components/topCards';
import BarChart from '../components/BarChart';
import Transações from '../components/Transações';
import Navbar from '@/components/Navbar';
import Loading from '@/components/Loading';
import Footer from '../components/Footer';
import axios from '../services/axios';

export default function Home() {
  const [transacoes, setTransacoes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(false);
      const response = await axios.get('/empresa/filha/transacoes');
      setTransacoes(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Potter House | Finanças</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 min-h-screen w-full">
        <Loading isLoading={isLoading} />

        <Navbar transacoes={transacoes} />
        <TopCards />

        <div className="p-4 grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-2 -mt-5 ">
          <Transações transacoes={transacoes} />
          <BarChart />
        </div>
        <Footer />
      </main>
    </>
  );
}
