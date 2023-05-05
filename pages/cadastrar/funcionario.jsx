import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import * as actions from '../../store/modules/auth/actions';

function Step1({ nome, setNome,sobrenome, setSobrenome, email, setEmail, nif, setNif,
    telefone, setTelefone, dataNascimento, setDataNascimento, handleGo, handleSubmit1 }) {
    return (
        <>
            <div className="flex justify-center align-center mt-[1rem]">


                <div className="flex justify-center align-center mt-[4rem]">

                    <div className="bg-white w-[25rem] p-5 rounded-[5px]">
                        <h1 className="text-center font-bold">Cadastrar funcionário - 1º passo </h1>
                        <div className="mt-[2rem]">
                            <form onSubmit={handleSubmit1}>
                                <input value={nome} onChange={(e) => setNome(e.target.value)}
                                    type="text"
                                    className="border w-full h-[2.8rem] p-5 text-sm
                                    rounded-[5px] bg-gray-100"
                                    placeholder="nome"
                                />

                                <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}
                                    type="text"
                                    className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 mt-3"
                                    placeholder="Sobrenome"
                                />

                            <input value={email} onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 mt-3"
                                    placeholder="email"
                                />

                                <input value={nif} onChange={(e) => setNif(e.target.value)}
                                    type="text"
                                    className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 mt-3"
                                    placeholder="NIF"
                                />


                                <input value={telefone} onChange={(e) => setTelefone(e.target.value)}
                                    type="number"
                                    className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 mt-3"
                                    placeholder="Telefone"
                                />

                                <input value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)}
                                    type="date"
                                    className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 mt-3"
                                    placeholder="Data de nascimento"
                                />
                                <button className="bg-gray-500 w-full h-[2.8rem] text-white mt-3 rounded-[5px]" onClick={handleGo}>
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



function Step2({ dataContratacao,  setDataContratacao, salario, setSalario, 
    educacao, setEducacao, bio, setBio, linguas_falada, setLinguas,
    endereco, setEndereco, handleGo2, handleSubmit2, handleBack1 }) {
    return (
        <>
            <div className="flex justify-center align-center mt-[1rem]">


                <div className="flex justify-center align-center mt-[4rem]">

                    <div className="bg-white w-[25rem] p-5 rounded-[5px]">
                        <h1 className="text-center font-bold">Cadastrar funcionário - 2º passo </h1>
                        <div className="mt-[2rem]">
                            <form onSubmit={handleSubmit2}>
                                

                                <input value={dataContratacao} onChange={(e) => setDataContratacao(e.target.value)}
                                    type="date"
                                    className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 mt-3"
                                    placeholder="Data de controtação"
                                />

                                <input value={linguas_falada} onChange={(e) => setLinguas(e.target.value)}
                                    type="text"
                                    className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 mt-3"
                                    placeholder="Línguas faladas"
                                />

                                <input value={salario} onChange={(e) => setSalario(e.target.value)}
                                    type="number"
                                    className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 mt-3"
                                    placeholder="Salario"
                                />

                                <input value={educacao} onChange={(e) => setEducacao(e.target.value)}
                                    type="text"
                                    className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 mt-3"
                                    placeholder="Educação"
                                />

                                <input value={bio} onChange={(e) => setBio(e.target.value)}
                                    type="text"
                                    className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 mt-3"
                                    placeholder="Biografia (opcional)"
                                />

                                <input value={endereco} onChange={(e) => setEndereco(e.target.value)}
                                    type="text"
                                    className="border w-full h-[2.8rem] p-5 text-sm focus:ring-blue-600
                                    rounded-[5px] bg-gray-100 mt-3"
                                    placeholder="Endereço"
                                />


                                 <button className="bg-gray-500 text-white w-full h-[2.8rem] rounded-[5px] mt-3" onClick={handleBack1}>
                                    Voltar
                                </button>
                                <button className="bg-azulScuro w-full h-[2.8rem] text-white mt-3 rounded-[5px]" onClick={handleGo2}>
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




function Step3({ nome, sobrenome, email, nif, telefone, dataNascimento,
    dataContratacao, salario, educacao, bio, linguas_falada, endereco,
     handleBack, handleSubmit }) {
    const isLoading = useSelector((state) => state.auth.isLoadingButom);

    return (

        <div className="flex justify-center align-center mt-[4rem]">


            <div className="flex justify-center align-center mt-[4rem]">

                <div className="bg-white w-[25rem] p-5 rounded-[5px]">
                    <h1 className="text-center font-bold">Confirme os dados</h1>
                    <div className="mt-[2rem]">
                        <p>
                            <strong>Nome:</strong> {nome}
                        </p>
                        <p>
                            <strong>Sobrenome:</strong> {sobrenome}
                        </p>
                        <p>
                            <strong>email:</strong> {email}
                        </p>

                        <p>
                            <strong>Telefone:</strong> {telefone}
                        </p>

                        <p>
                            <strong>Data de nascimento:</strong> {dataNascimento}
                        </p>

                        <p>
                            <strong>Data decontratação:</strong> {dataContratacao}
                        </p>

                        <p>
                            <strong>Saário:</strong> {salario}
                        </p>

                        <p>
                            <strong>Educação:</strong> {educacao}
                        </p>

                        <p>
                            <strong>Biografia:</strong> {bio}
                        </p>

                        <p>
                            <strong>Línguas falada:</strong> {linguas_falada}
                        </p>

                        <p>
                            <strong>Endereço:</strong> {endereco}
                        </p>

                        <button className="bg-gray-500 text-white w-full h-[2.8rem] rounded-[5px] mt-3" onClick={handleBack}>
                            Voltar
                        </button>
                        <button onClick={handleSubmit}
                            className={`bg-azulScuro w-full lg:focus:focus:ring-blue-600 h-[2.8rem] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                                } text-white mt-3 rounded-[5px `}
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
                                "Cadastrar"
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
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [nif, setNif] = useState('');
    const [telefone, setTelefone] = useState('');
    const [data_de_nascimento, setDataNascimento] = useState('');
    const [data_de_contratacao, setDataContratacao] = useState('');
    const [salario, setSalario] = useState('');
    const [educacao, setEducacao] = useState('');
    const [bio, setBio] = useState('');
    const [linguas_falada, setLinguas] = useState('');
    const [endereco, setEndereco] = useState('');

    const departamento_id = 1;
    const role_id = 1;


    const [tipo, setTipo] = useState('receita');
    const empresa_filha_id = 1;

    const router = useRouter();
    const dispatch = useDispatch();

    function handleTypeChange(event) {
        setTipo(event.target.value);
    }

    const handleGo = (e) => {
        e.preventDefault()

        if (!nome || !sobrenome) {
            toast.error("Por favor, preencha a descrição.");
            return;
        }

        if (!email) {
            toast.error("Por favor, preencha a valor.");
            return;
        }


        setStep(2);

    }


    const handleGo2 = (e) => {
        e.preventDefault()

        if (!nome) {
            toast.error("Por favor, preencha a descrição.");
            return;
        }

    

        setStep(3);

    }


    const handleSubmit1 = (e) => {
        e.preventDefault()
    }

    const handleSubmit2 = (e) => {
        e.preventDefault()
    }


    const handleSubmit = async (e) => {
        e.preventDefault();


        const Salario = parseFloat(salario);
        const Telefone = parseFloat(telefone);


        dispatch(actions.registerRequest({ departamento_id, role_id, nome, sobrenome, email, nif, telefone: Telefone, 
            data_de_nascimento, data_de_contratacao, salario: Salario, educacao, bio, linguas_falada, endereco
        }));
        router.push('/funcionarios');
    };

    const renderForm = (step) => {
        switch (step) {
            case 1:
                return (
                    <div className=''>
                        <Step1
                            nome={nome}
                            setNome={setNome}
                            sobrenome={sobrenome}
                            setSobrenome={setSobrenome}
                            email={email}
                            setEmail={setEmail}
                            nif={nif}
                            setNif={setNif}
                            dataNascimento={data_de_nascimento}
                            setDataNascimento={setDataNascimento}
                            telefone={telefone}
                            setTelefone={setTelefone}
                            handleGo={handleGo}
                            handleSubmit1={handleSubmit1}

                        />


                    </div>
                );

            case 2: return(
                <Step2
                    dataContratacao={data_de_contratacao}
                    setDataContratacao={setDataContratacao}
                    salario={salario}
                    setSalario={setSalario}
                    educacao={educacao}
                    setEducacao={setEducacao}
                    bio={bio}
                    setBio={setBio}
                    linguas_falada={linguas_falada}
                    setLinguas={setLinguas}
                    endereco={endereco}
                    setEndereco={setEndereco}
                    handleGo2={handleGo2}
                    handleSubmit2={handleSubmit2}
                    handleBack1={() => setStep(1)}

                
                
                
                
                />
            );

            case 3:
                return (
                    <div>
                        <Step3
                            nome={nome}
                            sobrenome={sobrenome}
                            email={email}
                            nif={nif}
                            telefone={telefone}
                            dataNascimento={data_de_nascimento}
                            dataContratacao={data_de_contratacao}
                            salario={salario}
                            educacao={educacao}
                            bio={bio}
                            linguas_falada={linguas_falada}
                            endereco={endereco}
                            handleBack={() => setStep(2)}
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