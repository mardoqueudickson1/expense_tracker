import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';

const StockDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await axios.get(`/empresa/filha/estoque/${id}`);
        const produto = response.data[0];
        setData(produto);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [id]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="p-4">
      <div>
        <h2 className="text-2xl font-bold mb-4">Detalhes do produto</h2>

        <div className="grid grid-cols-2 m-[5rem]">
          <div className="">
            <p>
              <strong>ID:</strong> {data.id}
            </p>
            <p>
              <strong>Nome:</strong> {data.nome}
            </p>
            <p>
              <strong>Descrição:</strong> {data.descricao}
            </p>
            <p>
              <strong>Quantidade:</strong> {data.quantidade}
            </p>

            <p>
              <strong>Categoria:</strong> {data.categoria}
            </p>

            <p>
              <strong>Valor:</strong> {data.valor}
            </p>

            <p>
              <strong>Data:</strong> {data.updated_at}
            </p>
          </div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
};

export default StockDetails;
