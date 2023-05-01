/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import * as actions  from '../../store/modules/auth/actions'



export default function Login() {
    const [tipo, setTipo] = useState('receita');
    console.log(tipo)
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const empresa_filha_id = 1

    const router = useRouter();
    const dispatch = useDispatch()

    function handleTypeChange(event) {
        setTipo(event.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        let formErrors = false;

        if (!descricao || !valor) {
            formErrors = true;
            toast.error('Todos campos são requeridos');
        }

        if (formErrors) return;

        const valorNumber = parseFloat(valor)
        console.log({ tipo, descricao, valor, empresa_filha_id }); // adicionado para debug
        dispatch(actions.registerTransacoesRequest({ tipo, descricao, valor: valorNumber, empresa_filha_id }));
        router.push("/")

    };


    return (
        <div className="flex justify-center align-center mt-[4rem]">


            <div className="flex justify-center align-center mt-[4rem]">

                <div className="bg-white w-[25rem] p-5 rounded-[5px]">
                    <h1 className="text-center font-bold">Cadastrar trasanção</h1>
                    <div className="mt-[2rem]">
                        <form onSubmit={handleSubmit}>
                            <input value={descricao} onChange={(e) => setDescricao(e.target.value)}
                                type="text"
                                className="border w-full h-[2.8rem] p-5 text-sm
        rounded-[5px] bg-gray-100"
                                placeholder="Descrição"
                            />

                            <input value={valor} onChange={(e) => setValor(e.target.value)}
                                type="number"
                                className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
         rounded-[5px] bg-gray-100 mt-3"
                                placeholder="Valor"
                            />

                            <select className="w-full h-[2.8rem] text-ms mt-3 px-5 text-base" value={tipo} onChange={handleTypeChange}>
                                <option value="receita">Receita</option>
                                <option value="despesa">Despesa</option>
                            </select>
                            <button className="bg-green-400 w-full 
        h-[2.8rem] text-white mt-3 rounded-[5px]"
                            >
                                Cadastrar

                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

