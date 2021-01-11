import axios from 'axios';

const clienteAxios=axios.create({
    // baseURL:'http://localhost:5000'
    baseURL:process.env.REACT_APP_ENVPOST
});

export default clienteAxios;