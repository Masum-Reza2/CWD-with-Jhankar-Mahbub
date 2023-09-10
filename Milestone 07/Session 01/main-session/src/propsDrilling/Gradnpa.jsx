import React, { useState } from 'react'
import Pa from './Pa'

/** >>>PROPS DRILLING<<<
 * We can pass everything as props like array, object, function and any variable.
 * As react is one dimensional is's best practice to write them(props) in the parent component.
 */


const Gradnpa = () => {
    const [count, setCount] = useState(0)
    let handleClick = () => {
        setCount(count + 1)
    }
    return (
        <>

            <div className='mt-10 py-10 text-center space-y-4'>
                <h1>Count : {count}</h1>
                <button onClick={handleClick} className='btn btn-sm'>increse</button>
            </div>

            <Pa count={count} />

        </>
    )
}

export default Gradnpa