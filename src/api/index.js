import axios from 'axios';
const JWTToken = 'pylon_secret_123753'
export const axiosInstance = axios.create({
    baseURL:  'http://52.232.79.210:5000',
    timeout: 10000,
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json; charset=utf-8',
        "Access-Control-Allow-Origin": "*",
        "Authorization" : `Bearer ${JWTToken}`
    }
})