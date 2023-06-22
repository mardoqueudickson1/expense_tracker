import React from 'react';
import Link from 'next/link';

const Configurations = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Configurações</h1>

      <div className="flex flex-col items-center space-y-4">
        <Link href="/change-password">
          <p className="bg-azulScuro hover:bg-blue-600 text-white py-2 px-4 rounded">
            Alterar Senha
          </p>
        </Link>

        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          Outras Configurações
        </button>
      </div>
    </div>
  );
};

export default Configurations;
