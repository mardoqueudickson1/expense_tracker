/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../store/modules/auth/actions';
import toast from 'react-hot-toast';



export default function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch()
  const entity = "funcionario"

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!email && !password) {
      toast.error('Todos campos são requeridos')
      return
    }

    if (!email) return toast.error('Campo email é obrigatório')
    if (!password) return toast.error('Campo senha é obrigatório')

    dispatch(actions.loginRequest({ email, password, entity }));

  };


  return (
    <div className="flex justify-center align-center mt-[4rem]">

      <div className="bg-gray-200 w-[25rem] p-5 rounded-[5px]">
        <h1 className="text-center font-bold">Login</h1>
        <div className="mt-[2rem]">
          <form action="" onSubmit={handleSubmit}>
            <input onChange={(e) => setEmail(e.target.value)} value={email}
              type="text" name="email"
              className="border w-full h-[2.8rem] p-5 text-sm rounded-[5px] bg-gray-100 
             focus:border-gray-500 focus:ring-gray-500"
              placeholder="Email"
            />

            <input onChange={(e) => setPassword(e.target.value)} value={password}
              type="password" name="password"
              className="border w-full h-[2.8rem] p-5 text-sm focus:border-gray-500 focus:ring-gray-500
            rounded-[5px] bg-gray-100 mt-3"
              placeholder="Senha"
            />
            <p className="mt-5">Esquecu a senha?</p>
            <button className="bg-azulScuro w-full lg:focus:focus:ring-blue-600
             h-[2.8rem] text-white mt-5 rounded-[5px]"
            >
              Entrar

            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

