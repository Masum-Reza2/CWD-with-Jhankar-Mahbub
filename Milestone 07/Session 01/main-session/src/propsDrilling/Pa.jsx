import React from 'react'
import Me from './me'

const Pa = ({ count }) => {
    console.log(count)
    return (
        <>
            <div className='text-center'>
                <h1>Count: {count}</h1>
            </div>

            <Me count={count}/>

        </>
    )
}

export default Pa
