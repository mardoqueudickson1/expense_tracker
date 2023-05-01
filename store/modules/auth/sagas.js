import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import toast from 'react-hot-toast';


function* loginRequest({ payload }) {
  try {
    

    const response = yield call(axios.post, '/empresa/filha/token', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Logado com sucesso!');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    console.log(payload);


  } catch (e) {
    console.log(e);
    toast.error('Email ou senha  inválida!');

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}


//REGISTER REQUEST
// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const { id, nome, email, password, history } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        email,
        nome,
        password: password || undefined,
      });
      toast.success('Conta alterada com sucesso!');
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, '/users', {
        email,
        nome,
        password,
      });
      toast.success('Conta criada com sucesso!');
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
      history.push('/login');
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.loginFailure());
      
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(actions.registerFailure());
  }
}


//TRANSACOES REQUEST
function* transacoesRequest({ payload }) {

  try { 

      yield call(axios.post, '/empresa/filha/transacoes', payload);
    
      toast.success('Transação cadastrada com sucesso!');

      yield put(actions.registerTransacoesSuccess(payload));
    
  } catch (e) {
      console.log(e)
      toast.error('Erro ao cadastrar');

    yield put(actions.registerTransacoesFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.REGISTER_TRANSACTION_REQUEST, transacoesRequest)
]);
