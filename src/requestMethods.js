import axios from 'axios';

const BASE_URL = 'https://shayanto.pythonanywhere.com/api/';


const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };
  

  const TOKEN = getCookie('accessToken');
  
  export const publicRequest = axios.create({
    baseURL: BASE_URL
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${TOKEN}` }
  });