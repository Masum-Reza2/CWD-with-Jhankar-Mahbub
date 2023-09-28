import { NavLink } from "react-router-dom"
import './nav.css'
import Logo from "./Logo"

const Navbar = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <nav className='flex items-center justify-between p-5 shadow-md shadow-gray-500 border'>
                <Logo />
                <ul className='flex gap-5 font-bold'>
                    <li className='border px-3 py-1 rounded-md'><NavLink to={'/'}>Home</NavLink></li>
                    <li className='border px-3 py-1 rounded-md'><NavLink to={'/favorites'}>Favorites</NavLink></li>
                    <li className='border px-3 py-1 rounded-md'><NavLink to={'/login'}>Login</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar