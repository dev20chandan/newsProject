// actions.js
// import axios from 'axios';
import * as actionTypes from './actionTypes';
import { GetFeed } from '../../Services/APICall';

const fetchFeedRequest = () => ({ type: actionTypes.FETCH_FEED_REQUEST });
const fetchFeedSuccess = (Feeds) => ({ type: actionTypes.FETCH_FEED_SUCCESS, Feeds });
const fetchFeedFailure = (error) => ({ type: actionTypes.FETCH_FEED_FAILURE, error });

export const fetchFeed = (data) => {
  return async (dispatch) => {
    try {
      dispatch(fetchFeedRequest());
      const response = await GetFeed();
      // console.log(response,'=======response')
      if (response.code === 200) {
        // console.log(response,'=======data')
        const Feeds = response;
        dispatch(fetchFeedSuccess(Feeds));
        return response;
      } else {
        dispatch(fetchFeedFailure(response.message));
        return response;
      }
    } catch (error) {
      console.log('====err',error)
      dispatch(fetchFeedFailure(error));
    }
  };
};

