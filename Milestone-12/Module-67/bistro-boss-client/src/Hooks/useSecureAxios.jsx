import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    // withCredentials: true,
});

const useSecureAxios = () => {

    // pechapechi here interceptor

    return instance;
}

export default useSecureAxios