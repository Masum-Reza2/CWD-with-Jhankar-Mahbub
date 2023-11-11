import { Outlet } from "react-router-dom"
import Footer from "../Shared/Footer/Footer"
import NavBar from "../Shared/NavBar/NavBar"

const LayOut = () => {
    return (
        <div>
            <NavBar />
            <div className="min-h-[80vh]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default LayOut