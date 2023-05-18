import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import * as actions from '../../store/modules/auth/actions';

function Step1({
  descricao,
  valor,
  tipo,
  handleTypeChange,
  setDescricao,
  setValor,
  handleGo,
  handleSubmit1,
}) {
  return (
    <>
      <div className="flex justify-center align-center mt-[4rem]">
        <div className="flex justify-center align-center mt-[4rem]">
          <div className="bg-white w-[25rem] p-5 rounded-[5px]">
            <h1 className="text-center font-bold">Cadastrar trasanção</h1>
            <div className="mt-[2rem]">
              <form onSubmit={handleSubmit1}>
                <input
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  type="text"
                  className="border w-full h-[2.8rem] p-5 text-sm
                                    rounded-[5px] bg-gray-100"
                  placeholder="Descrição"
                />

                <input
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                  type="number"
                  className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 mt-3"
                  placeholder="Valor"
                />

                <select
                  className="w-full h-[2.8rem] text-ms mt-3 px-5 text-base"
                  value={tipo}
                  onChange={handleTypeChange}
                >
                  <option value="receita">Receita</option>
                  <option value="despesa">Despesa</option>
                </select>
                <button
                  className="bg-gray-500 w-full h-[2.8rem] text-white mt-3 rounded-[5px]"
                  onClick={handleGo}
                >
                  Continuar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Step2({ descricao, valor, tipo, handleBack, handleSubmit }) {
  const isLoading = useSelector((state) => state.auth.isLoadingButom);

  return (
    <div className="flex justify-center align-center mt-[4rem]">
      <div className="flex justify-center align-center mt-[4rem]">
        <div className="bg-white w-[25rem] p-5 rounded-[5px]">
          <h1 className="text-center font-bold">Confirme os dados</h1>
          <div className="mt-[2rem]">
            <p>
              <strong>Descrição:</strong> {descricao}
            </p>
            <p>
              <strong>Valor:</strong> {valor}
            </p>
            <p>
              <strong>Tipo:</strong> {tipo}
            </p>
            <button
              className="bg-gray-500 text-white w-full h-[2.8rem] rounded-[5px] mt-3"
              onClick={handleBack}
            >
              Voltar
            </button>
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
                'Cadastrar'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('receita');
  const empresa_filha_id = 1;

  const router = useRouter();
  const dispatch = useDispatch();

  function handleTypeChange(event) {
    setTipo(event.target.value);
  }

  const handleGo = (e) => {
    e.preventDefault();

    if (!descricao) {
      toast.error('Por favor, preencha a descrição.');
      return;
    }

    if (!valor) {
      toast.error('Por favor, preencha a valor.');
      return;
    }

    setStep(2);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const valorNumber = parseFloat(valor);

    console.log({ tipo, descricao, valor: valorNumber, empresa_filha_id }); // adicionado para debug
    dispatch(
      actions.registerTransacoesRequest({
        tipo,
        descricao,
        valor: valorNumber,
        empresa_filha_id,
      })
    );
    router.push('/');
  };

  const renderForm = (step) => {
    switch (step) {
      case 1:
        return (
          <div className="">
            <Step1
              descricao={descricao}
              valor={valor}
              tipo={tipo}
              handleTypeChange={handleTypeChange}
              setDescricao={setDescricao}
              setValor={setValor}
              handleGo={handleGo}
              handleSubmit={handleSubmit1}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <Step2
              descricao={descricao}
              valor={valor}
              tipo={tipo}
              handleBack={() => setStep(1)}
              handleSubmit={handleSubmit}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderForm(step)}</div>;
}
