// actions.js
// import axios from 'axios';
import * as actionTypes from './actionTypes';
import { LoginAPI } from '../../Services/APICall';

const fetchUsersRequest = (data) => ({ type: actionTypes.FETCH_USERS_REQUEST,data });
const fetchUsersSuccess = (users) => ({ type: actionTypes.FETCH_USERS_SUCCESS, users });
const fetchUsersFailure = (error) => ({ type: actionTypes.FETCH_USERS_FAILURE, error });

export const fetchUsers = (data) => {
  console.log(data,'========data')
  return async (dispatch) => {
    try {
      dispatch(fetchUsersRequest(data));
      const response = await LoginAPI(data);
      if (response.code === 200) {
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

