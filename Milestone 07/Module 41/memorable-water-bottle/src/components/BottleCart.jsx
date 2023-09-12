import React from 'react'

const BottleCart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h3>Cart : {cart.length}</h3>
            <div>
                {cart.map((bottle, index) => <div key={index}>
                    <img style={{ width: '100px', marginLeft: '5px' }} src={bottle.img}></img>
                    <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                </div>)}
            </div>
        </div>
    )
}

export default BottleCart
