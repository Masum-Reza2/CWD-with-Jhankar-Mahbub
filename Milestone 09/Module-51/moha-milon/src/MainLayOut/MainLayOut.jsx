import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

const MainLayOut = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[80vh]">
                <Outlet />
            </div>
            footer here
        </div>
    )
}

export default MainLayOut