import React, { useState, useDispatch, useEffect } from 'react';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { BsFillBriefcaseFill, BsGeoAltFill, BsFillTelephoneFill } from 'react-icons/bs';
import Modal from '../components/ModalEdit';
import { useSelector } from 'react-redux';
import axios from '../services/axios'
import Loading from '@/components/Loading';

function adminPage() {
  const [isLoading, setIsLoading] = useState()
  const dados = useSelector(state => state.auth.user);
  const [user, setUser] = useState([])
  console.log(user)

  useEffect(() => {
    async function getData() {
      setIsLoading(true)
      const response = await axios.get(`/empresa/filha/funcionario/${dados.id}`);
      setUser(response.data);
      setIsLoading(false)

      
      
    }

    getData();
  }, []);


  return (
 
    <div className="">
    <Loading isLoading={isLoading} />

      <div className=" bg- bg-black flex justify-between py-5 px-10 lg:px-14
    md:flex md:justify-between item-center"
      >
        <div className="text-white text-3xl relative top-1 ">Dados Pessoais</div>

      </div>
      <div className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-6 m-5">

        <div className="bg-white flex flex-col p-5 rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-azulScuro">Perfil 4</h1>
            <Modal>

              {' '}
              <div className="flex justify-center align-center mt-[4rem]">

                <div className="bg-white w-[25rem] p-5 rounded-[5px]">
                  <h1 className="text-center font-bold">atualizar dados</h1>
                  <div className="mt-[2rem]">
                    <form action="">
                      <input
                        type="text"
                        className="border w-full h-[2.8rem] p-5 text-sm rounded-[5px] bg-gray-100"
                        placeholder="Nome"
                      />

                      <input
                        type="text"
                        className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                       rounded-[5px] bg-gray-100 mt-3"
                        placeholder="Sobrenome"
                      />

                      <input
                        type="text"
                        className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                       rounded-[5px] bg-gray-100 mt-3"
                        placeholder="Telefone"
                      />

                      <input
                        type="text"
                        className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                       rounded-[5px] bg-gray-100 mt-3"
                        placeholder="Morada"
                      />

                      <input
                        type="text"
                        className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                       rounded-[5px] bg-gray-100 mt-3"
                        placeholder="Endereço da casa"
                      />

                      <button className="bg-azulScuro w-full
                  h-[2.8rem] text-white mt-3 rounded-[5px]"
                      >
                        Atualizar

                      </button>
                    </form>
                  </div>

                </div>
              </div>

            </Modal>

          </div>

          <div className="mt-7">
            <FaUserCircle size={90} className="text-azulScuro" />
          </div>
          <span className="text-xl font-bold mt-2">{dados.nome} {dados.sobrenome}</span>

          <div className="flex flex-col my-5">
            <div className="flex gap-2">
              <BsFillBriefcaseFill />
              <p className="text-gray-500">{user.nome_role}</p>
            </div>

            <div className="flex gap-2">
              <BsFillTelephoneFill />
              <p className="text-gray-500">+244 {dados.telefone}</p>
            </div>

            <div className="flex gap-2">
              <BsGeoAltFill />
              <p className="text-gray-500">{dados.endereco}</p>
            </div>

            <div className="flex flex-col my-4">
              <p className="text-gray-500">Endereço email</p>
              <p>{dados.email}</p>
            </div>

            <div className="flex flex-col my-4">
              <p className="text-gray-500">Data de nascimento</p>
              <p>{dados.data_de_nascimento}</p>
            </div>

            <div className="flex flex-col my-4">
              <p className="text-gray-500">Endereço da casa</p>
              <p>
                {dados.endereco}
                <br />
                Luanda, Angola
              </p>
            </div>

          </div>
        </div>

        {/* Informações gerais do perfil */}
        <div className="lg:col-span-2 bg-white">
          <div className="flex flex-col p-5 rounded-lg">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold text-azulScuro">Informações gerais</h1>
              <FaEdit className="cursor-pointer" />
            </div>
            <h2 className=" text-xl mt-7">Sobre mim</h2>
            <p className="text-gray-500 mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos assumenda
              facilis alias officia illum esse. Possimus est ex laudantium cumque similique
              repudiandae mollitia nesciunt totam esse. Veritatis ducimus in sed!
              <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos assumenda
              facilis alias officia illum esse.
              Possimus est ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos assumenda
              facilis alias officia illum esse. Possimus estlaudantium cumque similique
              repudiandae mollitia nesciunt totam esse. Veritatis ducimus in sed!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
              <div className="flex flex-col mt-7">
                <p className=" text-gray-500">Educação</p>
                <div className="flex"> </div>
                <span>{dados.educacao}</span>
              </div>

              <div className="flex flex-col mt-7">
                <p className=" text-gray-500">Histórico de trabalho</p>
                <span>Potter House, Cap, Turing</span>
              </div>
              <div className="flex flex-col mt-7">
                <p className=" text-gray-500">Início de trabalho</p>
                <span>{dados.data_de_contratacao}</span>
              </div>

              <div className="flex flex-col mt-7">
                <p className=" text-gray-500">Línguas</p>
                <span>{dados.linguas_falada}</span>
              </div>
              <div className="flex flex-col mt-7">
                <p className=" text-gray-500">função</p>
                <span>{user.nome_role}</span>
              </div>

              <div className="flex flex-col mt-7">
                <p className=" text-gray-500">Departamento</p>
                <span>{user.nome_departamento}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )

};

export default adminPage;
