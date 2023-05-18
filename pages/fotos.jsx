/* eslint-disable no-unused-vars */
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../services/axios';
import { toast } from 'react-hot-toast';
import * as actions from '../store/modules/auth/actions';
import Loading from '../components/Loading';

export default function Fotos({ match }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = React.useState(false);
  const [foto, setFoto] = React.useState('');

  const router = useRouter();

  React.useEffect(() => {
    const getData = async () => {
      setFoto(user.fotoUrl);
    };

    getData();
  }, []);

  const handleChange = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    const fotoURL = URL.createObjectURL(file);
    setFoto(fotoURL);

    const formData = new FormData();
    formData.append('funcinario_id', user.id);
    formData.append('foto_funcionario', file);

    try {
      setIsLoading(true);
      await axios.post('/empresa/filha/foto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      router.push('/perfil');
      toast.success('Foto enviada com sucesso!');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', '');
      console.log(err);
      toast.error('Erro ao enviar foto.');

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <div className="">
      <Loading isLoading={isLoading} />
      <h1 className="text-center">Enviar foto</h1>
      <div className="flex justify-center items-center w-full h-full">
        <form className="flex flex-col items-center">
          <label
            className="w-48 h-48 flex items-center justify-center bg-gray-200 border-4 border-dashed border-azulScuro mt-8 mb-8 rounded-full cursor-pointer overflow-hidden"
            htmlFor="foto"
          >
            {foto ? (
              <img src={foto} alt="Foto" className="w-48 h-48" />
            ) : (
              'Selecionar'
            )}
            <input
              className="hidden"
              type="file"
              id="foto"
              onChange={handleChange}
            />
          </label>

          <button className="bg-gray-500 text-white w-full h-[2.8rem] rounded-[5px] mt-3">
            <Link href="/perfil">Cancelar</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
