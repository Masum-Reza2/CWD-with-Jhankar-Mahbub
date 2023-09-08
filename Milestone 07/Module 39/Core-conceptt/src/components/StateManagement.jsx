// vs code automatically imports the required files but be attentive and careful to prevent errors.
import React, { useState } from 'react'

const StateManagement = () => {

    // useState() function return an array
    // index-1> a variable
    // index-2> a function who can change the value of the variable

    const [count, setCount] = useState(0)
    // console.log(useState())
    let handleIncrement = () => {
        let newCount = count + 1
        setCount(newCount)
    }

    let handleDecrement = () => {
        let newCount = count - 1
        setCount(newCount)
    }

    const [team, setTeam] = useState(11)
    let handleTeamAdd = () => {
        setTeam(team + 1)
    }
    let handleTeamRemove = () => {
        setTeam(team - 1)
    }

    return (
        <>
            <div>
                <h1>Count : {count}</h1>
            </div>
            <div>
                <button onClick={handleIncrement} disabled={count === 10 ? true : false}>Increment</button>
                <button onClick={handleDecrement} style={{ marginLeft: '10px' }} disabled={count === 0 ? true : false}>Decrement</button>
            </div>

            <div>
                <h1>Team : {team}</h1>
                <button onClick={handleTeamAdd}>Add</button>
                <button onClick={handleTeamRemove} disabled={team < 12 ? true : false}>Remove</button>
            </div>

        </>
    )
}

export default StateManagement