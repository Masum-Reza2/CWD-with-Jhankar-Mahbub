import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar"

const Layout = () => {
    return (
        <div className="w-[90%] mx-auto">
            <Navbar />
            <div className="min-h-[80vh]">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout