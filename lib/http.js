import axios from "axios";
import {X_RapidAPI_Host, X_RapidAPI_Key} from '@env'

const http = axios.create({
    baseURL: 'https://jsearch.p.rapidapi.com',
})

http.interceptors.request.use(function (config) {
    config.headers["X-RapidAPI-Key"] = X_RapidAPI_Key;
    config.headers["X-RapidAPI-Host"] = X_RapidAPI_Host;
    config.headers["Content-Type"] = "application/json";
    return config;
}, function (error) {
    return Promise.reject(error);
});


export default http;
