import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import {
  BsFillBriefcaseFill,
  BsGeoAltFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import axios from '../../services/axios';

function adminPage() {
  const [perfil, setPerfil] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setPerfil(response.data);
    }

    getData();
  }, []);

  <div className=" grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
    <div className="bg-white flex flex-col p-5 rounded-lg">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Perfil 2</h1>
        <FaEdit className="cursor-pointer" />
      </div>

      <div className="mt-7">
        <FaUserCircle size={90} />
      </div>
      {/* <span className="text-xl font-bold mt-2">{perfil.nome}</span> */}

      <div className="flex flex-col my-5">
        <div className="flex gap-2">
          <BsFillBriefcaseFill />
          <p className="text-gray-500">Web Developer</p>
        </div>

        <div className="flex gap-2">
          <BsFillTelephoneFill />
          <p className="text-gray-500">+244 923121348</p>
        </div>

        <div className="flex gap-2">
          <BsGeoAltFill />
          <p className="text-gray-500">Luanda, Benfica</p>
        </div>

        <div className="flex flex-col my-4">
          <p className="text-gray-500">Endereço email</p>
          <p>{perfil.email}</p>
        </div>

        <div className="flex flex-col my-4">
          <p className="text-gray-500">Data de nascimento</p>
          <p>02/11-1997</p>
        </div>

        <div className="flex flex-col my-4">
          <p className="text-gray-500">Endereço da casa</p>
          <p>
            Benfica, Zona verde, rua 24
            <br />
            Luanda, Angola
          </p>
        </div>
      </div>
    </div>

    {/* Informações gerais do perfil */}
    <div className="lg:col-span-2 bg-white">
      <div className="flex flex-col p-5 rounded-lg">
        <h1 className="font-bold text-xl">Informações gerais</h1>
        <h2 className=" text-xl mt-5">Sobre mim</h2>
        <p className="text-gray-500 mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          assumenda facilis alias officia illum esse. Possimus est ex laudantium
          cumque similique repudiandae mollitia nesciunt totam esse. Veritatis
          ducimus in sed!
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          assumenda facilis alias officia illum esse. Possimus est ipsum dolor
          sit, amet consectetur adipisicing elit. Dignissimos assumenda facilis
          alias officia illum esse. Possimus estlaudantium cumque similique
          repudiandae mollitia nesciunt totam esse. Veritatis ducimus in sed!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          <div className="flex flex-col mt-7">
            <p className=" text-gray-500">Educação</p>
            <div className="flex"> </div>
            <span>Instituto Superior Metropolitano de Angola</span>
          </div>

          <div className="flex flex-col mt-7">
            <p className=" text-gray-500">Histórico de trabalho</p>
            <span>Potter House, Cap, Turing</span>
          </div>
          <div className="flex flex-col mt-7">
            <p className=" text-gray-500">Início de trabalho</p>
            <span>12-02-2022</span>
          </div>

          <div className="flex flex-col mt-7">
            <p className=" text-gray-500">Línguas</p>
            <span>Português, Inglês, Francês</span>
          </div>
          <div className="flex flex-col mt-7">
            <p className=" text-gray-500">função</p>
            <span>Programador web</span>
          </div>

          <div className="flex flex-col mt-7">
            <p className=" text-gray-500">Departamento</p>
            <span>Multimídia</span>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default adminPage;
