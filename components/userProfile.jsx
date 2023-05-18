import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function userProfile({ toggle }) {
  const dados = useSelector((state) => state.auth.user);

  return (
    <div
      className={` p-1 my-2 mx-1  flex gap-5 items-center ${
        !toggle
          ? ' duration-300 bg-none delay-200 pr-10'
          : 'bg-testeAzul rounded-2xl  '
      }`}
    >
      <Link href="perfil">
        <div className="min-w-[3.5rem] h-[3.5rem] border-solid  cursor-pointer">
          <img
            src={dados.fotoUrl}
            alt="Minha imagem"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </Link>

      <div className={`${!toggle ? 'opacity-0 ' : ''}`}>
        <h3 className="text-sm text-white">
          {dados.nome} {dados.sobrenome}
        </h3>
        <span className="text-[0.85rem] opacity-60  text-white">
          {dados.nomeRole}{' '}
        </span>
      </div>
    </div>
  );
}
