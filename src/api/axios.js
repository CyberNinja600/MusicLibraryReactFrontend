import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://shayanto.pythonanywhere.com/api/', 
});

export default instance;