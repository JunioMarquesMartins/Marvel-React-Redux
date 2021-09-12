import * as env from '../environment';
import axios from 'axios';

const { API_KEY } = env[process.env.NODE_ENV];
export const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
});

export const apikey = API_KEY;
