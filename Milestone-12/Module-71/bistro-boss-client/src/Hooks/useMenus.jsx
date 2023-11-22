// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios"

const useMenus = () => {
    const secureAxios = useSecureAxios();
    // const [menus, setMenus] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch(`https://bistro-boss-server-eight-xi.vercel.app/menu`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenus(data)
    //             setLoading(false)
    //         });
    // }, []);

    const { isPending: loading, data: menus = [], refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await secureAxios.get('/menu');
            return res.data;
        }
    })




    return { menus, loading, refetch }
}

export default useMenus