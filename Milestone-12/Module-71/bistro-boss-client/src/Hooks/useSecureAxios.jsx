import axios from "axios";
import { useNavigate } from "react-router-dom";
import useGlobal from "./useGlobal";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    // withCredentials: true,
    headers: { token: localStorage.getItem('token') }
});

const useSecureAxios = () => {
    const navigate = useNavigate()
    const { logOutUser } = useGlobal()
    // pechapechi here interceptor
    instance.interceptors.request.use(function (config) {
        // Do something before request is sent

        // another way
        // const token = localStorage.getItem('token')
        // config.headers.token = token
        // another way

        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    instance.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log('error in the interceptor is ', error)
        const status = error.response.status;
        if (status === 401 || status === 403) {
            console.log('kick out the user and navigate to login page')
            navigate('/login')
            logOutUser()
        }
        return Promise.reject(error);
    });


    return instance;
}

export default useSecureAxios