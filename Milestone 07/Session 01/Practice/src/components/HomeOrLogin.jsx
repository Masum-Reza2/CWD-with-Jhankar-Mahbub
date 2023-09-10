import React, { useState } from 'react'
import Login from './Login'
import Homepage from './Homepage'


const HomeOrLogin = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)

    let mrHandle = () => {
        // make improvement there
        setLoggedIn(true)
    }

    let handleLogOut = () =>{
        setLoggedIn(false)
    }

    return (

        // conditional rendering
        <div>
            {/* <Login /> */}
            {/* <Homepage /> */}
            {/* {isLoggedIn ? <Homepage /> : <Login />} */}
            {isLoggedIn && <Homepage handleLogOut={handleLogOut} />}
            {isLoggedIn || <Login mrHandle={mrHandle} />}
        </div>
    )
}

export default HomeOrLogin
