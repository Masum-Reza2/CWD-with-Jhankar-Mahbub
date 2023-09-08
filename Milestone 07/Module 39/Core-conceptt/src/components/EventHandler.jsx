import React from 'react'

const EventHandler = () => {
    let handleClick1 = () => {
        alert('button 1 clicked')
    }

    let handleClick2 = (word) => {
        alert(word)
    }

    return (
        <>
            <div>
                <button onClick={handleClick1}>Click1</button>
                {/* here we can't call the function directly.
                when the function have params we are to call it with an anonymous function example below*/}
                <button onClick={() => handleClick2('Love you')}>See more</button>
            </div>
        </>
    )
}

export default EventHandler