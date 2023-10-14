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
        if (status === 401) {
          console.log('401 Unauthorized API Call');
          // Handle unauthorized access, e.g., logout or redirect
        } else if (status === 404) {
          console.log('404 Not Found');
          // Handle the 404 error, e.g., display a "Not Found" message
        } else if (status === 500) {
          console.log('500 Internal Server Error');
          // Handle the 500 error, e.g., show a server error message
        } else {
          console.log('HTTP Error:', status);
          // Handle other HTTP errors here
        }
      } else if (error.request) {
        console.log('Request Error:', error.request);
        // Handle the request error, e.g., show a connection error message
      } else {
        console.log('Request Setup Error:', error.message);
        // Handle other request setup errors here
      }
  
      // Return the error to be handled at a higher level
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
