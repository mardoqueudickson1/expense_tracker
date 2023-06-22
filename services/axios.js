import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// const baseURL =
//   process.env.REACT_ENV === 'production'
//     ? 'https://potterhouseapi.onrender.com'
//     : 'http://localhost:3001';

const api = axios.create({
  baseURL: 'https://potterhouseapi.onrender.com',
});

export default api;
