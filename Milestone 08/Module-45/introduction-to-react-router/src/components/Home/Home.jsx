import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <h1>This is Home</h1>
            <Outlet />
            {/* the outlet defined component is fixed in the router, and routed components will show there*/}
            <Footer />
        </div>
    )
}

export default Home
