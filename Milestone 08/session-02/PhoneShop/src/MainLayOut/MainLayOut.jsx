import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Header/Navbar'

const MainLayOut = () => {
    const loc = useLocation()
    console.log(loc)

    useEffect(() => {
        document.title = `Phone Shop${loc.pathname.replace('/', '-')}`
    }, [loc])

    return (
        <div>
            <Navbar />
            <div className='min-h-[80vh]'>
                <Outlet />
            </div>
            <h1 className='text-center'>Footer here</h1>
        </div>
    )
}

export default MainLayOut
