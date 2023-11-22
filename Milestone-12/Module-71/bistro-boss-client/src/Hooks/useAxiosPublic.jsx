import axios from "axios"

const publicAxios = axios.create({
    baseURL: 'https://bistro-boss-server-eight-xi.vercel.app',

})

const useAxiosPublic = () => {
    return publicAxios;
}

export default useAxiosPublic