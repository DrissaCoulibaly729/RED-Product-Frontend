import axios from 'axios';

const axiosInstanceHotel = axios.create({
    baseURL: 'http://localhost:5000/api/hotels',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
  });
  

  export default axiosInstanceHotel;