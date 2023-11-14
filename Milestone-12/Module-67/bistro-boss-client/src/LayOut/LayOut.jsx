import { Outlet, useLocation } from "react-router-dom"
import Footer from "../Shared/Footer/Footer"
import NavBar from "../Shared/NavBar/NavBar"

const LayOut = () => {

    const { pathname } = useLocation();

    const islogin = pathname.includes('/login') || pathname.includes('/register'); //this is one way another way to make the login route independent

    return (
        <div>
            {islogin || <NavBar />}
            <div className="min-h-[80vh]">
                <Outlet />
            </div>
            {islogin || <Footer />}
        </div>
    )
}

export default LayOut