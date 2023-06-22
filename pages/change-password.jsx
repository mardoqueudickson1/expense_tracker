import React, { useSelector } from 'react';
import toast from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import axios from '../services/axios';

export default function changePassword() {
  const isLoading = useSelector((state) => state.auth.isLoadingButom);
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const token = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.auth.user.email);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const isPasswordValid = (password) => {
    const regex = /[A-Z]/;
    return regex.test(password);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !password2) {
      return toast.error('Todos os campos são obrigatório!');
    }

    if (password !== password2) {
      return toast.error('As senhas precisam ser iguais');
    }

    if (password.length < 8) {
      return toast.error('A senha precisam ter pelo menos 8 caracteres');
    }

    if (!isPasswordValid(password)) {
      return toast.error(
        'A senha precisa incluir pelo menos uma letra maiúscula'
      );
    }

    const result = await axios.put('/empresa/filha/alterar-password', {
      email,
      token,
      password,
    });
    if (result.ok) {
      toast.success('Senha alterada com sucesso');
    }
  };

  return (
    <>
      <div className="flex justify-center align-center mt-[4rem]">
        <div className="bg-gray-200 w-[25rem] p-5 rounded-[5px]">
          <h1 className="text-center font-bold">Alterar password</h1>

          <div className="mt-[2rem]">
            <form action="">
              <div className="relative mt-3">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="border w-full h-[2.8rem] p-5 text-sm rounded-[5px] bg-gray-100 focus:border-gray-500 focus:ring-gray-500"
                  placeholder="Senha"
                />
                <span
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>

              <div className="relative mt-3">
                <input
                  onChange={(e) => setPassword2(e.target.value)}
                  value={password2}
                  type={showPassword2 ? 'text' : 'password'}
                  name="password"
                  className="border w-full h-[2.8rem] p-5 text-sm rounded-[5px] bg-gray-100 focus:border-gray-500 focus:ring-gray-500"
                  placeholder="Senha"
                />
                <span
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={handleTogglePassword2}
                >
                  {showPassword2 ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>

              <button
                onClick={handleSubmit}
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
                  'salvar'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
