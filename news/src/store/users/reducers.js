// reducers.js
import * as actionTypes from './actionTypes';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_USERS_SUCCESS:
      return { ...state, users: action.users, isLoading: false };
    case actionTypes.FETCH_USERS_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
