import React, { useEffect, useState } from 'react'
import Bottle from './bottle'
import './bottle.css'
import { addToLS, getStoredCart, removeFromLS } from './utilities/localStorage'
import BottleCart from './BottleCart'

// prop-types
import propTypes from 'prop-types'

const MemorablBottle = () => {

    // one
    const [bottles, setBottles] = useState([])
    useEffect(() => {
        try {
            fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
                .then(res => res.json())
                .then(data => setBottles(data))
        } catch (error) {
            console.log(error)
        }
    }, [])
    // console.log(bottles)

    // two
    const [cart, setCart] = useState([])
    const handleCart = (cartItem) => {
        // console.log(cartItem)
        let newArray = [...cart, cartItem.id]
        setCart(newArray)
        addToLS(cartItem.id)//setting items to LS
    }
    // console.log(cart)
    useEffect(() => {
        // console.log('another useEffect', bottles.length)
        if (bottles.length > 0) {
            let storedData = getStoredCart();
            // console.log(storedData, bottles)
            let savedCart = [];
            for (let id of storedData) {
                let bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart)
        }
    }, [bottles])//depends on bottles
    // console.log(getStoredCart())


    // important effect in UI
    const handleRemoveFromCart = (id) =>{
        removeFromLS(id)
        const remainingCart = cart.filter(bottle => bottle.id!==id)
        setCart(remainingCart)
        console.log(id)
    }

    return (
        <div>
            <h2>Available Bottles : {bottles.length}</h2>
            <BottleCart cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
            <div className='container'>
                {bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleCart={handleCart}/>)}
            </div>
        </div>
    )
}

// propTypes 
// npm i --save prop-types
// then import it

// MemorablBottle.propTypes = {
//     bottles:propTypes.object.isRequired,
//     // as so on
// }

export default MemorablBottle