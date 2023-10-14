// actions.js
// import axios from 'axios';
import * as actionTypes from './actionTypes';
import { LoginAPI } from '../../Services/APICall';

const fetchUsersRequest = () => ({ type: actionTypes.FETCH_USERS_REQUEST });
const fetchUsersSuccess = (users) => ({ type: actionTypes.FETCH_USERS_SUCCESS, users });
const fetchUsersFailure = (error) => ({ type: actionTypes.FETCH_USERS_FAILURE, error });

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersRequest());
      const response = await LoginAPI();
      if (response.code === 200) {
        const users = response;
        dispatch(fetchUsersSuccess(users));
      } else {
        dispatch(fetchUsersFailure(response));
      }
    } catch (error) {
      dispatch(fetchUsersFailure(error));
    }
  };
};
