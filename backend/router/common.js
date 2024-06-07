import express from 'express';
import api from './api.js';
import Users from './app/users.js'
import Feeds from "./app/feed.js"

const router = express.Router();

router.use('/api', api);
router.use('/api/',Users)
router.use('/api/',Feeds)

export default router;


// const jsonData = { key1: 'value1', key2: 'value2' };

// const options = {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json' // Set content type to JSON
//   },
//   body: JSON.stringify(jsonData) // Convert JSON data to a string and set it as the request body
// };

// fetch('http://localhost:4000/api/updateFeed', options)
//   .then(response => {
//     // Check if the response is okay
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     // Log response for debugging
//     console.log('Response received:', response);
//     return response.json(); // This also returns a promise
//   })
//   .then(data => {
//     // Log the data received from the server
//     console.log('Data received:', data);
//   })
//   .catch(error => {
//     // Log any error that occurs during the fetch operation
//     console.error('There was a problem with the fetch operation:', error);
//   });

