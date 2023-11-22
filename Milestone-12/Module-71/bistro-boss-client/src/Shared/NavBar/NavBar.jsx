import { NavLink, useNavigate } from "react-router-dom"
import useGlobal from "../../Hooks/useGlobal"
import Swal from "sweetalert2";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCarts from "../../Hooks/useCarts";
import useAdmin from "../../Hooks/useAdmin";


const NavBar = () => {
    const { carts = [] } = useCarts()

    const { user, logOutUser } = useGlobal();
    const navigate = useNavigate();
    const { isAdmin } = useAdmin();

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    title: "Log out success",
                    // text: "That thing is still around?",
                    icon: "success"
                });
                navigate('/login')
            })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/menus'}>Our Menu</NavLink></li>
        <li><NavLink to={'/order/salad'}>Order Food</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>

        {user && isAdmin ?
            <li><NavLink to={'/dashboard/adminHome'}>Dashboard</NavLink></li>
            :
            <li><NavLink to={'/dashboard/userHome'}>Dashboard</NavLink></li>
        }



        {
            user ?
                <>
                    <button className="btn-ghost" onClick={handleLogOut}>LogOut</button>
                </>
                :
                <li><NavLink to={'/login'}>Login</NavLink></li>
        }

    </>
    return (
        <div>
            <div className="navbar bg-black bg-opacity-30 max-w-7xl text-white fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro-Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end list-none">
                    <li><NavLink to={'/dashboard/cart'}>
                        <button className="btn mr-2">
                            <AiOutlineShoppingCart />
                            <div className="badge badge-secondary">+{carts?.length}</div>
                        </button>
                    </NavLink></li>
                </div>
            </div>
        </div>
    )
}

export default NavBar