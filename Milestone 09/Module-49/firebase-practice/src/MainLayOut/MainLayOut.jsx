import { NavLink, Outlet } from "react-router-dom"

const MainLayOut = () => {

    const activeStyle = "text-red-500 underline font-semibold text-lg"

    return (
        <div >
            <div className="text-center space-x-5 py-5" >
                <NavLink
                    to={`/`}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? activeStyle
                            : isPending
                                ? "pending"
                                : ""
                    }
                >Home
                </NavLink>
                <NavLink
                    to={`/login`}
                    className={({ isActive, isPending }) =>
                        isActive
                            ? activeStyle
                            : isPending
                                ? "pending"
                                : ""
                    }
                >Login
                </NavLink>
            </div>
            <div className="min-h-[80vh] flex items-center justify-center">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayOut