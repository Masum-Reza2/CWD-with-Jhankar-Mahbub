import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Phones from './components/Phones';
import Phone from './components/phone';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: '/phones', loader: () => fetch('http://localhost:5000/phones'), element: <Phones /> },
      { path: '/phone/:id', loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`), element: <Phone /> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
