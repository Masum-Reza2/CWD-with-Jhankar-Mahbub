import React from 'react'


const Card = ({ data, handleSingleDelete }) => {
    // console.log(data)
    console.log(handleSingleDelete)
    let { name, id, age } = data

    return (
        <>
            <div>
                <h2 id={id} className='text-center font-bold text-lg'>{name}</h2>
                <div className='text-center'>
                    <button onClick={handleSingleDelete(id)} className='btn btn-sm btn-error'>delete</button>
                </div>
            </div>
        </>
    )
}

export default Card