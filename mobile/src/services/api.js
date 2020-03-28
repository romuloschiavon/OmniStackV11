import axios from 'axios';

const api = axios.create({
    baseURL: 'http://YOURIPHERE:3333'
})

export default api;