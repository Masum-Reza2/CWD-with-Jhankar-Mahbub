import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Users from './Components/Users';
import Update from './Components/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  { path: '/users', element: < Users />, loader: () => fetch('http://localhost:5000/users') },
  { path: '/update/:id', element: <Update />, loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`) }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
