import { createBrowserRouter } from "react-router-dom"
import LayOut from "../LayOut/LayOut"
import Home from "../Pages/Home/Home"
import Menu from "../Pages/Menu/Menu"
import Order from "../Pages/OrderFood/Order"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import PrivateRoute from "./PrivateRoute"
import DashBoard from "../LayOut/DashBoard"
import Cart from "../Pages/DashBoard/Cart"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <LayOut />,
        errorElement: <h1>OOps error occured</h1>,
        children: [
            { index: true, element: <Home /> },
            { path: '/menus', element: <PrivateRoute><Menu /></PrivateRoute> },
            { path: '/order/:category', element: <Order /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> }
        ]
    },

    // dashboard routes
    {
        path: '/dashboard',
        element: <DashBoard />,
        children: [
            {
                path: 'cart', element: <Cart />
            }
        ]

    }
])

export default Router