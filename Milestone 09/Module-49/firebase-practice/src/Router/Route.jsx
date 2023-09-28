import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayOut/MainLayOut"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },
        ]
    }
])

export default Route