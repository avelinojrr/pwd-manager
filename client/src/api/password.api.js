import axios from 'axios';

const passwordApi = axios.create({
    baseURL: 'http://localhost:8000/password/api/v1/password/'
});


export const getAllPasswords = () => passwordApi.get("/");

export const getPassword = (id) => passwordApi.get(`/${id}/`);

export const createPassword = (password) => passwordApi.post("/", password);

export const deletePassword = (id) => passwordApi.delete(`/${id}`);

export const updatePassword = (id, password) => passwordApi.put(`/${id}/`, password);