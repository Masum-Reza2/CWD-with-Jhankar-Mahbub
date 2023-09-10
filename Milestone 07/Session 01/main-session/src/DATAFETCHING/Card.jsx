import React from 'react'

const Card = ({ data }) => {
    let { id, userId, title, body } = data;
    return (
        <div className='text-center font-bold w-[80%] mx-auto shadow-md py-10 my-5 shadow-gray-500 rounded-md'>
            <p>Id : {id}</p>
            <p>Title : {title}</p>
            <p>Body : {body}</p>
        </div>
    )
}

export default Card
