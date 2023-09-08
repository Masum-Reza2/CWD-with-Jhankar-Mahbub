import React, { useEffect, useState } from 'react'
import Post from './Post'

const Posts = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            {posts.map((post, index) => <Post key={index} postObj={post} />)}
        </div>
    )
}

export default Posts
