import React, { useEffect, useState } from 'react'
import Card from './Card'

const ApplyUseEffect = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
            // here we can also use async await
    }, [])

    return (
        <>
            {friends.map((friend, index) => {
                return (
                    <Card key={index} friendObj = {friend}/>
                )
            })}
        </>
    )
}

export default ApplyUseEffect