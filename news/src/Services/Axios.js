import axios from 'axios';
import { API_URL } from './URLS';

const baseAxios = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

baseAxios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 401:
          console.log('401 Unauthorized API Call');
          break;
        case 404:
          console.log('404 Not Found');
          break;
        case 500:
          console.log('500 Internal Server Error');
          break;
        default:
          console.log('HTTP Error:', status);
      }
    } else if (error.request) {
      console.log('Request Error:', error.request);
    } else {
      console.log('Request Setup Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export const Axios = {
  get: (url, options = {}) => baseAxios.get(url, options),
  post: (url, data, options = {}) => baseAxios.post(url, data, options),
  patch: (url, data, options = {}) => baseAxios.patch(url, data, options),
  put: (url, data, options = {}) => baseAxios.put(url, data, options),
  delete: (url, options = {}) => baseAxios.delete(url, options),
};
