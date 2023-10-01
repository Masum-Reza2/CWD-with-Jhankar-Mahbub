import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import MainLayOut from './MainLayOut/MainLayOut';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Orders from './Pages/Orders';
import PrivateRoute from './RouteGuard/PrivateRoute';
import AuthProvider from './ContextProvider/AuthProvider';
import React from 'react';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <h1 className='text-center text-2xl h-screen flex items-center justify-center font-bold text-red-500'>Opps</h1>,
    children: [
      { path: '/', element: <PrivateRoute><Home /></PrivateRoute> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/orders', element: <PrivateRoute><Orders /></PrivateRoute> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)