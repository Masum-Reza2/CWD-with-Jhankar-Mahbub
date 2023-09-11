import React from 'react'

const WatchCard = ({ clock }) => {
    let { brand, model, price } = clock;

    return (
        <div style={{ textAlign: 'center', border: '2px solid red', margin:'5px', padding:'5px', borderRadius:'10px' }}>
            <h2>{brand}</h2>
            <p>{model}</p>
            <h3>{price}</h3>
        </div>
    )
}

export default WatchCard