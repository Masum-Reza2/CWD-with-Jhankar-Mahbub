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
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers"
import AdminRoute from "./AdminRoute"
import AddItems from "../Pages/DashBoard/AddItems/AddItems"
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems"
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem"
import Payment from "../Pages/DashBoard/Payment/Payment"
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory"
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome"
import UserHome from "../Pages/DashBoard/UserHome/UserHome"

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
        element: <PrivateRoute><DashBoard /></PrivateRoute>,
        children: [
            // users routes
            { path: 'userHome', element: <UserHome /> },
            {
                path: 'cart', element: <Cart />
            },
            { path: 'payment', element: <Payment /> },
            { path: 'paymentHistory', element: <PaymentHistory /> },


            // admin routes
            { path: 'adminHome', element: <AdminRoute><AdminHome /></AdminRoute> },
            { path: 'allUsers', element: <AdminRoute><AllUsers /></AdminRoute> },
            { path: 'addItems', element: <AdminRoute><AddItems /></AdminRoute> },
            {
                path: 'updateItem/:id', element: <AdminRoute><UpdateItem /></AdminRoute>,
                loader: ({ params }) => fetch(`https://bistro-boss-server-eight-xi.vercel.app/menu/${params?.id}`)
            },
            { path: 'manageItems', element: <AdminRoute><ManageItems /></AdminRoute> }
        ]

    }
])

export default Router