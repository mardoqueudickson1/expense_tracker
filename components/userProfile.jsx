import React from 'react';
import Link from 'next/link';

const userProfile = ({ toggle }) => (

  <div className={` p-2 my-2 mx-1  flex gap-5 items-center ${!toggle ? ' duration-300 bg-none delay-200 pr-10'
    : 'bg-testeAzul rounded-2xl  '}`}
  >
    <Link href="Perfil">
      <div className="min-w-[3.5rem] h-[3.5rem] border-solid  cursor-pointer">
        <img
          src="/profile2.jpg"
          alt="Minha imagem"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </Link>

    <div className={`${!toggle ? 'opacity-0 ' : ''}`}>
      <h3 className="text-xl text-white">Welcome</h3>
      <span className="text-[0.85rem] opacity-60  text-white">Multimedia | Designer </span>
    </div>
  </div>
);

export default userProfile;