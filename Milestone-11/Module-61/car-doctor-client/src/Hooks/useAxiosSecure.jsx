import axios from "axios"
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import auth from "../Firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: `https://car-doctor-server-2q5x4k0ma-masum-rezas-projects.vercel.app`,
    withCredentials: true,
})

const useAxiosSecure = () => {

    const navigate = useNavigate();

    // more kahini's here
    //  so the kahini is interceptor
    useEffect(() => {
        axiosSecure.interceptors.response.use((response) => {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, (error) => {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            // return Promise.reject(error);
            console.log(`error tracked inside the interceptor`, error.response)
            if (error?.response?.status >= 401) {
                // console.log('logout the user')
                signOut(auth)
                    .then(() => {
                        navigate('/login');
                    })
                    .catch((error) => {
                        console.log(error.message);
                    })
            }
        });
    }, [])

    return axiosSecure;
}

export default useAxiosSecure