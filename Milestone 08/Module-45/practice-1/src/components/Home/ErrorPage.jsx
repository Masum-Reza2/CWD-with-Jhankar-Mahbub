import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    console.log(error)
    const handleHome = () => {
        navigate('/')
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Oops something wrong</h1>
            <h5>You are trying to go mars, jupiter, urenus, neptune, which is out of bound from our area.</h5>
            <h6>Please Goto Home</h6>
            <h5>{error.statusText || error.message}</h5>
            <button onClick={handleHome}>Home</button>
        </div>
    )
}

export default ErrorPage
