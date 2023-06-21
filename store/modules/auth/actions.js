import * as types from '../types';

//USER REQUESTS
export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export const setRedirect = (redirect) => {
  return {
    type: types.SET_REDIRECT,
    payload: redirect,
  };
};

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}

export function registerUpdatedSuccess(payload) {
  return {
    type: types.REGISTER_UPDATED_SUCCESS,
    payload,
  };
}

export function registerCreatedSuccess(payload) {
  return {
    type: types.REGISTER_CREATED_SUCCESS,
    payload,
  };
}

export function registerFailure(payload) {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
}

//TRANSACOES REQUESTS

export function registerTransacoesRequest(payload) {
  return {
    type: types.REGISTER_TRANSACTION_REQUEST,
    payload,
  };
}

export function registerTransacoesFailure(payload) {
  return {
    type: types.REGISTER_TRANSACTION_FAILURE,
    payload,
  };
}

export function registerTransacoesSuccess(payload) {
  return {
    type: types.REGISTER_TRANSACTION_SUCCESS,
    payload,
  };
}

export function registerTransacoesUpdatedSuccess(payload) {
  return {
    type: types.REGISTER_TRANSACTION_UPDATED_SUCCESS,
    payload,
  };
}

//FOTOS REQUEST

export function registerFotoRequest(payload) {
  return {
    type: types.REGISTER_FOTO_REQUEST,
    payload,
  };
}

export function registerFotoFailure(payload) {
  return {
    type: types.REGISTER_FOTO_REQUEST,
    payload,
  };
}

export function registerFotoSuccess(payload) {
  return {
    type: types.REGISTER_FOTO_REQUEST,
    payload,
  };
}

export function registerFotoUpdateSucess(payload) {
  return {
    type: types.REGISTER_FOTO_REQUEST,
    payload,
  };
}
