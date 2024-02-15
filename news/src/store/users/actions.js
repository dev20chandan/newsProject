// actions.js
// import axios from 'axios';
import * as actionTypes from './actionTypes';
import { LoginAPI } from '../../Services/APICall';

const fetchUsersRequest = () => ({ type: actionTypes.FETCH_USERS_REQUEST });
const fetchUsersSuccess = (users) => ({ type: actionTypes.FETCH_USERS_SUCCESS, users });
const fetchUsersFailure = (error) => ({ type: actionTypes.FETCH_USERS_FAILURE, error });

export const fetchUsers = (data) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersRequest());
      const response = await LoginAPI();
      console.log(response,'=======response')
      if (response.code === 200) {
        console.log(response,'=======data')
        const users = response;
        dispatch(fetchUsersSuccess(users));
        return response;
      } else {
        dispatch(fetchUsersFailure(response.message));
        return response;
      }
    } catch (error) {
      console.log('====err',error)
      dispatch(fetchUsersFailure(error));
    }
  };
};

