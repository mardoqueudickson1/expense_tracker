/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../store/modules/auth/actions';


export default function Login (props)  {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch()
  const entity =  "funcionario"

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)

    dispatch(actions.loginRequest({ email, password, entity }));

  };


  return (
    <div className="flex justify-center align-center mt-[4rem]">

      <div className="bg-white w-[25rem] p-5 rounded-[5px]">
        <h1 className="text-center font-bold">Login</h1>
        <div className="mt-[2rem]">
          <form action="" onSubmit={handleSubmit}>
            <input onChange={(e) => setEmail(e.target.value)} value={email} 
              type="text" name="email"
              className="border w-full h-[2.8rem] p-5 text-sm
            rounded-[5px] bg-gray-100"
              placeholder="Email"
            />

            <input  onChange={(e) => setPassword(e.target.value)} value={password} 
              type="password" name="password"
              className="border w-full h-[2.8rem] p-5 text-sm
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

