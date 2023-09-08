import React from 'react'

const Post = ({ postObj }) => {
    console.log(postObj)
    let { userId, title, id, body } = postObj;
    return (
        <div style={{ border: '2px solid purple', width: 'fit-content', padding: '10px', margin: '10px', borderRadius: '10px' }}>
            <h2>Title : {title}</h2>
            <h2>Id : {id}</h2>
            <h2>User Id : {userId}</h2>
            <h2>{body}</h2>
        </div>
    )
}

export default Post