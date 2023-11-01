import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Checkout from "../Components/Checkout/Checkout"
import Bookings from "../Pages/Bookings/Bookings"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <h1>Opps error occured</h1>,
        children: [
            { path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/checkout/:id', element: <PrivateRoute><Checkout /></PrivateRoute>, loader: ({ params }) => fetch(`https://car-doctor-server-2q5x4k0ma-masum-rezas-projects.vercel.app/service/${params.id}`) },
            { path: '/bookings', element: <PrivateRoute><Bookings /></PrivateRoute> }
        ]
    }
])

export default Router