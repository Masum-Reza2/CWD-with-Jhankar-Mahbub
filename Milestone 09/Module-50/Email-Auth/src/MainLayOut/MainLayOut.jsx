import { Outlet } from "react-router-dom"
import Header from "../Header/Header"

const MainLayOut = () => {
    return (
        <div>
            <Header />
            <div className="min-h-[80vh]">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayOut