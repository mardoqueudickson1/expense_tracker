import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {


    //LOGIN
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }


    
    //UPDATE
    case types.REGISTER_UPDATED_SUCCESS: {
      const newState = { ...state };
      newState.user = action.payload;
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }



    //TRANSACOES
    case types.REGISTER_TRANSACTION_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.REGISTER_TRANSACTION_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_TRANSACTION_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_TRANSACTION_UPDATED_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_TRANSACTION_UPDATED_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    default: {
      return state;
    }
  }
}
