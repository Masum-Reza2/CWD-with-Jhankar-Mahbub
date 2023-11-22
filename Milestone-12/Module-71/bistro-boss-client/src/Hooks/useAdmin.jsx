import { useQuery } from "@tanstack/react-query";
import useGlobal from "./useGlobal"
import useSecureAxios from "./useSecureAxios";

const useAdmin = () => {
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();
    const { data: isAdmin, isPending: isLoading } = useQuery({
        queryKey: ['isdmin', user?.email],
        queryFn: async () => {
            if (user) {
                const res = await secureAxios.get(`/users/admin/${user?.email}`)
                return res?.data?.admin
            }
        }
    })
    return { isAdmin, isLoading };
}

export default useAdmin