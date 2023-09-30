import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayOut/MainLayOut"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import HeroRegister from "../Pages/HeroRegister/HeroRegister"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> },
            { path: '/heroRegister', element: <HeroRegister /> },
        ]
    }
])
export default Router