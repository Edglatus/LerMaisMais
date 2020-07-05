import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.dicionario-aberto.net/word',
});

export default api;