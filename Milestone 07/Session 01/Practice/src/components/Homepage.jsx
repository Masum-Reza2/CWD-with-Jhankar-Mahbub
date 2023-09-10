import React, { useEffect, useState } from 'react'
import Card from './Card'

const Homepage = ({ handleLogOut }) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center' }}>

            <div>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
            
            {posts.map((post, index) => <Card postObj={post} key={index} />)}
        </div>
    )
}

export default Homepage
