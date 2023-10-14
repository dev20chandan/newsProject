// actions.js
// import axios from 'axios';
import * as actionTypes from './actionTypes';
import { LoginAPI } from '../../Services/APICall';

const fetchLoginRequest = () => ({ type: actionTypes.FETCH_LOGIN_REQUEST });
const fetchLoginSuccess = (data) => ({ type: actionTypes.FETCH_LOGIN_SUCCESS, data });
const fetchLoginFailure = (error) => ({ type: actionTypes.FETCH_LOGIN_FAILURE, error });

export const fetchLogin = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchLoginRequest());
      const response = await LoginAPI();
      if (response.code === 200) {
        const users = response;
        dispatch(fetchLoginSuccess(users));
      } else {
        dispatch(fetchLoginFailure(response));
      }
    } catch (error) {
      dispatch(fetchLoginFailure(error));
    }
  };
};
