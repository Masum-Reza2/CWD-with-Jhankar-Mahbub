import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"

const MainLayOut = () => {
    return (
        <div className="text-center">

            <Header />

            <div className="min-h-[80vh] py-5">
                <Outlet />
            </div>

            footer there

        </div>
    )
}

export default MainLayOut