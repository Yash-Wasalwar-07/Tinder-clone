import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend-mern-p1.herokuapp.com'
})

export default instance;