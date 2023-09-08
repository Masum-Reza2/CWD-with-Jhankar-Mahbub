import React from 'react'

const Card = ({ friendObj }) => {
    // console.log(friendObj)
    let { name, username, email } = friendObj;

    return (
        <div style={{ border: '2px solid purple', padding: '20px', borderRadius: '12px', marginTop: '10px' }}>
            <h2>Name : {name}</h2>
            <h2>User Name : {username}</h2>
            <h2>E-mail : {email}</h2>
        </div>
    )
}

export default Card
