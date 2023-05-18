import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/modules/auth/actions';
import toast from 'react-hot-toast';

export default function Login() {
  const isLoading = useSelector((state) => state.auth.isLoadingButom);
  // const isLoading = true;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const entity = 'funcionario';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      toast.error('Todos campos são requeridos');
      return;
    }

    if (!email) return toast.error('Campo email é obrigatório');
    if (!password) return toast.error('Campo senha é obrigatório');

    dispatch(actions.loginRequest({ email, password, entity }));
  };

  return (
    <>
      <div className="flex justify-center align-center mt-[4rem]">
        <div className="bg-gray-200 w-[25rem] p-5 rounded-[5px]">
          <h1 className="text-center font-bold">Login</h1>
          <div className="mt-[2rem]">
            <form action="" onSubmit={handleSubmit}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                name="email"
                className="border w-full h-[2.8rem] p-5 text-sm rounded-[5px] bg-gray-100 
             focus:border-gray-500 focus:ring-gray-500"
                placeholder="Email"
              />

              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
                className="border w-full h-[2.8rem] p-5 text-sm focus:border-gray-500 focus:ring-gray-500
            rounded-[5px] bg-gray-100 mt-3"
                placeholder="Senha"
              />
              <p className="mt-5">Esquecu a senha?</p>
              <button
                className={`bg-azulScuro w-full lg:focus:focus:ring-blue-600 h-[2.8rem] ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                } text-white mt-5 rounded-[5px `}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-50"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 018 4.337v-.006l.008-.007A8 8 0 0117.663 10H12v2h6.196A7.965 7.965 0 0112 19.663v-2.002zm-4-2.002A7.965 7.965 0 014 12H1.021A10.04 10.04 0 0012 22.979V20H5.291v-2.002z"
                      />
                    </svg>
                    Processando...
                  </div>
                ) : (
                  'Entrar'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
