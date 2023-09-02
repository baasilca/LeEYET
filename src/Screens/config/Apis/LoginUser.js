import axios from 'axios';
import urlConfig from '../config.json';

const loginUser = (body) => {
    return axios.post(urlConfig.baseURL + 'login', body, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export {
    loginUser as Login,
};