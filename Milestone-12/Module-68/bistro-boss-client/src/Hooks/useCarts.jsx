import { useQuery } from "@tanstack/react-query"
import useSecureAxios from "./useSecureAxios"
import useGlobal from "./useGlobal";

const useCarts = () => {
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();
    const { data: carts = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/carts?email=${user?.email}`)
            return res.data;
        }
        // secureAxios.get('/carts')
        //     .then(res => {
        //         return res.data;
        //     })
    })
    return { carts, refetch };
}

export default useCarts