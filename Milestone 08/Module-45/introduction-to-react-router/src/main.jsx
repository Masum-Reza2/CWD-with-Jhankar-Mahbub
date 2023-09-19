import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// step 01
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';


// step 02
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/users', element: <Users /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* step 03 */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
