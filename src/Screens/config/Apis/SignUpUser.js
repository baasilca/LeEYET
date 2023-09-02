import axios from 'axios';
import urlConfig from '../config.json';

const signUpUser = (body) => {
    return axios.post(urlConfig.baseURL + 'adduser', body, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export {
    signUpUser as SignUp,
};