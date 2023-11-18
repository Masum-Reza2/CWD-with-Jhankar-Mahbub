import { Navigate, useLocation } from "react-router-dom";
import useGlobal from "../Hooks/useGlobal"
import Spinner from "../Shared/Spinner/Spinner";

const PrivateRoute = ({ children }) => {

    const { pathname } = useLocation()

    const { user, loading } = useGlobal();
    if (loading) return <Spinner />
    if (user) return children
    return <Navigate state={pathname} to={'/login'}></Navigate>
}

export default PrivateRoute