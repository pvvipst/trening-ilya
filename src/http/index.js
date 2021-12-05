import axios from "axios";
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const getTodo = () =>{
    return axios.get('posts');
}