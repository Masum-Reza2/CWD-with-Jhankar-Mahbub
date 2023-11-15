import { AiFillCalendar, AiOutlineFolderView, AiOutlineMenu, AiOutlineOrderedList, AiOutlineShoppingCart } from "react-icons/ai"
import { NavLink, Outlet } from "react-router-dom"
import { IoMdHome, IoMdList } from "react-icons/io";
import './dashboard.css'
import useCarts from "../Hooks/useCarts";

const DashBoard = () => {
    const { carts } = useCarts();
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400 py-3">
                <ul className="flex flex-col gap-2 ">
                    <li><NavLink className="flex items-center pl-5 p-2 gap-2 bg-blue-400" to={'/dashboard/userHome'}>
                        <AiOutlineShoppingCart /><span>User Home</span></NavLink>
                    </li>
                    <li><NavLink className="flex items-center pl-5 p-2 gap-2 bg-blue-400" to={'/dashboard/reservation'}>
                        <AiFillCalendar /><span>Reservation</span></NavLink>
                    </li>
                    <li><NavLink className="flex items-center pl-5 p-2 gap-2 bg-blue-400" to={'/dashboard/review'}>
                        <AiOutlineFolderView /><span>Add a Review</span></NavLink>
                    </li>
                    <li><NavLink className="flex items-center pl-5 p-2 gap-2 bg-blue-400" to={'/dashboard/cart'}>
                        <IoMdHome />
                        <span>My cart ({carts.length})</span></NavLink>
                    </li>
                    <li><NavLink className="flex items-center pl-5 p-2 gap-2 bg-blue-400" to={'/dashboard/bookings'}>
                        <IoMdList />
                        <span>My Bookings</span></NavLink>
                    </li>

                    <div className="divider"></div>

                    <li><NavLink className="flex items-center pl-5 p-2 gap-2 bg-blue-400" to={'/'}>
                        <AiOutlineShoppingCart /><span>Home</span></NavLink>
                    </li>
                    <li><NavLink className="flex items-center pl-5 p-2 gap-2 bg-blue-400" to={'/menus'}>
                        <AiOutlineMenu /><span>Menu</span></NavLink>
                    </li>
                    <li><NavLink className="flex items-center pl-5 p-2 gap-2 bg-blue-400" to={'/order/salad'}>
                        <AiOutlineOrderedList /><span>Shop</span></NavLink>
                    </li>
                </ul>
            </div>


            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    )
}

export default DashBoard