import React, { useState } from 'react'

const Card = ({ postObj }) => {
    // console.log(postObj)
    let { userId, id, title, body } = postObj;

    const [count, setCount] = useState(0)

    let handleIncrease = (wish) => {
        setCount(count + 1)
        alert(`button Increased to ${count + 1}. ${wish}`)
    }
    let handleDecrease = (wish) => {
        setCount(count - 1)
        alert(`button Decreased to ${count - 1}. ${wish}`)
    }

    return (
        <>
            <div style={{ border: '2px solid purple', width: '300px', padding: '6px 10px', margin: '5px', borderRadius: '10px', textAlign: 'center' }}>
                <h2>Id : {id}</h2>
                <h2>User-Id : {userId}</h2>
                <h2>{title}</h2>
                <h2>{body}</h2>

                <div style={{ border: '2px solid gray', padding: '5px', borderRadius: '10px' }}>
                    <h1>{count}</h1>
                    <button onClick={() => handleIncrease('All the best')}>increase</button>
                    <button onClick={() => handleDecrease('aww getting down')}>decrease</button>
                </div>

            </div>
        </>
    )
}

export default Card