import React from 'react'

const Bottle = ({ bottle, handleCart }) => {
    // console.log(bottle)
    const { name, img, price, ratings, stock } = bottle;
    return (
        <div style={{ border: '2px solid purple', borderRadius: '10px', padding: '10px' }}>
            <h3>{name}</h3>
            <div>
                <img style={{ width: '300px' }} src={img} alt="" />
            </div>
            <p>Price: {price}</p>
            <p>Rating: {ratings}</p>
            <p>Stock : {stock}</p>
            <button onClick={() => handleCart(bottle)}>Purchase</button>
        </div>
    )
}

export default Bottle
