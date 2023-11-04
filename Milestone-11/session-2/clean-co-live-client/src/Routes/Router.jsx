import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import About from '../Pages/About/About'
import Home from '../Pages/Home/Home'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <h1>Oops error occured, make a components for it</h1>,
        children: [
            { path: '/about', element: <About /> },
            { index: true, element: <Home /> },
        ]
    },

    {
        path: '/login', element: <Login />
    },
    {
        path: '/register', element: <Register />
    }
])

export default Router