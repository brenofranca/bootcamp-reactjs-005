import axios from 'axios';

const api = axios.create({
  baseURL: 'https://127.0.0.1:3300/',
});

export default api;
