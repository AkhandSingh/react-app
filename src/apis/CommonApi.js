import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:44303/',
  });

export default instance;