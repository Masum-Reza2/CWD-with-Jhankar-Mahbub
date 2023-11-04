import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import ControlRoom from './ControlRoom/ControlRoom.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ControlRoom>
      <RouterProvider router={Router} />
    </ControlRoom>
  </React.StrictMode>,
)
