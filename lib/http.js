import axios from "axios";
import {User_Agent, Authorization_Key, USA_JOB_API_URL} from '@env'

const http = axios.create({
    baseURL: USA_JOB_API_URL,
})

http.interceptors.request.use(function (config) {
    config.headers["User-Agent"] = User_Agent;
    config.headers["Authorization-Key"] = Authorization_Key;
    return config;
}, function (error) {
    return Promise.reject(error);
});


export default http;
