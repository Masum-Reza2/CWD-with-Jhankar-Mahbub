/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin"
import useGlobal from "../Hooks/useGlobal";
import Spinner from "../Shared/Spinner/Spinner";

const AdminRoute = ({ children }) => {
    const { isAdmin, isLoading } = useAdmin();
    const { pathname } = useLocation()
    const { user, loading } = useGlobal();

    if (loading || isLoading) return <Spinner />
    if (user && isAdmin) return children
    return <Navigate state={pathname} to={'/'}></Navigate>
}

export default AdminRoute