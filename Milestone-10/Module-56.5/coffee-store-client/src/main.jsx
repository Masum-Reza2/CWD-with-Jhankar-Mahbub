import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import ControlRoom from './ControlRoom/ControlRoom.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch('https://coffee-store-server-ovh7gifky-masum-rezas-projects.vercel.app/coffee'),
  },
  {
    path: '/addCoffee', element: <AddCoffee />,
  },
  {
    path: 'updateCoffee/:id', element: <UpdateCoffee />, loader: ({ params }) => fetch(`https://coffee-store-server-ovh7gifky-masum-rezas-projects.vercel.app/coffee/${params.id}`)
  },
  { path: '/signIn', element: <SignIn /> },
  { path: '/signUp', element: <SignUp /> },
  { path: '/users', element: <Users />, loader: () => fetch('https://coffee-store-server-ovh7gifky-masum-rezas-projects.vercel.app/users') },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ControlRoom>
      <RouterProvider router={router} />
    </ControlRoom>
  </React.StrictMode>,
)
