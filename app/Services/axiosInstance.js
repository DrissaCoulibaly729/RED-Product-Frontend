import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/users',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});



export default axiosInstance;
