import axios from 'axios';

//axios.defaults.baseURL = 'http://10.19.247.182:3001';
axios.defaults.baseURL = 'http://localhost:3001';

export default {
    createUser(data) {
        return axios.post('/auth', data);
    },

    //api 브랜치 연습
    //api 브랜치 연습 한번 더해봄
    
};