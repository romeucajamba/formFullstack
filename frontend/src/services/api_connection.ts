import axios from "axios";

export const api_connector = axios.create({
    baseURL: 'http://localhost:3000/'
})