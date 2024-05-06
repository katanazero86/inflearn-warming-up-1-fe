import axios from "axios";
const API_URI = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
    baseURL:API_URI
});

export {
    axios,
    axiosInstance
}