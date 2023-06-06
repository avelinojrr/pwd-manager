import axios from 'axios';

const passwordApi = axios.create({
    baseURL: 'http://localhost:8000/password/api/v1/password/'
});


export const getAllPasswords = () => passwordApi.get("/");
export const createPassword = (password) => passwordApi.post("/", password);
