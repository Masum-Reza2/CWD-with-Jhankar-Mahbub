import { NavLink } from "react-router-dom"
import Navbar from "./Navbar"
import SideBar from "./SideBar"

const Header = () => {

    const navLinks = <>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <Navbar navLinks={navLinks} />
                {/* Page content here */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <SideBar navLinks={navLinks} />
            </div>
        </div>
    )
}

export default Header