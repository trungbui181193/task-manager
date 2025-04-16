import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/auth';

export const login = (credentials) => {
    console.log(1);
    console.log(`${BASE_URL}/login`);
    return axios.post(`${BASE_URL}/login`, credentials)
};
export const register = (data) => axios.post(`${BASE_URL}/register`, data);
