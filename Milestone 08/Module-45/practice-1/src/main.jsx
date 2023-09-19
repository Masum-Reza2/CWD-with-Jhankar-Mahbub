import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/Users/UserDetails.jsx';
import Posts from './components/Posts/Posts';
import SinglePost from './components/Posts/SinglePost';

const router = createBrowserRouter([
  {
    path: '/', element: <Home />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },

      // route based data fetching, receive the data in the component.
      {
        path: "/users",
        // it will fetch the data only when required path is calling.
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users />
      },

      // dynamic data loading/dynamic route
      {
        path: '/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts />
      },
      {
        path: '/post/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element: <SinglePost />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)