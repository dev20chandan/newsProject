// reducers.js
import * as actionTypes from './actionTypes';

const initialState = {
  LoginData: {},
  isLoading: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_LOGIN_SUCCESS:
      return { ...state, LoginData: action.LoginData, isLoading: false };
    case actionTypes.FETCH_LOGIN_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};

export default loginReducer;
