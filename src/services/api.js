import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'https://app-cad.herokuapp.com/'
    }
)
export default api;