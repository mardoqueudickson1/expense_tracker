import React from 'react';

const StockDetails = () => {
  // Encontre o estoque com o ID correspondente nos dados do estoque

  return (
    <div className="p-4">
      <div>
        <h2 className="text-2xl font-bold mb-4">Detalhes do Estoque</h2>
        <p>
          <strong>ID:</strong> id
        </p>
        <p>
          <strong>Nome:</strong> nome
        </p>
        <p>
          <strong>Descrição:</strong> esc
        </p>
        <p>
          <strong>Quantidade:</strong> quantidade
        </p>
        {/* <p>
            <strong>Preço:</strong> R$ {stock.price.toFixed(2)}
          </p> */}
      </div>
    </div>
  );
};

export default StockDetails;
