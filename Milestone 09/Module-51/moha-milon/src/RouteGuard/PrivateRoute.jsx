import { useContext } from "react"
import { AuthContext } from "../ContextProvider/AuthProvider"
import { Navigate, useNavigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    // const navigate = useNavigate() //here this is not effifient
    // the efficient one is <Navigate> component

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to={'/login'}></Navigate>
    }

}

export default PrivateRoute