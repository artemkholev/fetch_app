import axios from 'axios';

export const API_URL = 'https://jsonplaceholder.typicode.com/';

export const apiAxios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 10000
});