// actions.js
import axios from 'axios';
import * as actionTypes from './actionTypes';

const fetchUsersRequest = () => ({ type: actionTypes.FETCH_USERS_REQUEST });
const fetchUsersSuccess = (users) => ({ type: actionTypes.FETCH_USERS_SUCCESS, users });
const fetchUsersFailure = (error) => ({ type: actionTypes.FETCH_USERS_FAILURE, error });

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());

    axios.get('https://dummyjson.com/users') // Replace with your API endpoint
      .then((response) => {
        console.log(response,'======here response')
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
      });
  };
};
