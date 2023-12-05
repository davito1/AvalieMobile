import Axios from 'axios';

const api = Axios.create({
    //baseURL: 'http://192.168.0.203:8000/api'
    baseURL: 'http://192.168.1.107:8000/api'
})


export default api;
