import React from 'react'

const Login = ({ mrHandle }) => {

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Welcome to Login page. Please login</h1>
            <input type="text" name="" id="" placeholder='Enter your email' /><br />
            <input style={{ marginTop: '15px' }} type="number" name="" id="" placeholder='Enter your number' />

            <br />
            <button onClick={mrHandle} style={{ marginTop: '10px' }}>Log in</button>
        </div>
    )
}

export default Login