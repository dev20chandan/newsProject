// reducers.js
import * as actionTypes from './actionTypes';

const initialState = {
  Feeds: [],
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FEED_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_FEED_SUCCESS:
      return { ...state, Feeds: action.Feeds, isLoading: false };
    case actionTypes.FETCH_FEED_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
