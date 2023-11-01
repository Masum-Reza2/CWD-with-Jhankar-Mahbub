/* eslint-disable no-unused-vars */
import { Navigate, useLocation } from "react-router-dom";
import useGlobal from "../Hooks/useGlobal"

const PrivateRoute = ({ children }) => {
    const { user, loading } = useGlobal();
    const { pathname } = useLocation();

    if (loading) {
        return <h1 className="text-center font-bold text-5xl mt-52">Loading...</h1>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate state={pathname} to={'/login'}></Navigate>
    }

}

export default PrivateRoute