import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"

const Layout = () => {

    return (
        <div>
            <Header />
            <div className="min-h-screen">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout