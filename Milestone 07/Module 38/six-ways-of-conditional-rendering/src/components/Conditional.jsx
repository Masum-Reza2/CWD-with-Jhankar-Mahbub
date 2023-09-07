import React from 'react'

// conditional rendering is possible in different ways
// look down for example

const Conditional = ({ name, age, isDone }) => {

    // if (isDone) {
    //     return (
    //         <div>
    //             <h2>Name: {name}</h2>
    //             <h2>Age: {age}</h2>
    //             <h2>Work : {isDone ? 'Completed' : 'Incomplete'}</h2>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <h1>IsDone is false</h1>
    //     )
    // }

    // return(
    //     <div>
    //         <h1>Work {isDone? 'completed' : 'Incomplete'}</h1>

    //         {isDone && <p>Wow you did it</p>}
    //         {isDone || <p>Go and do it</p>}
    //     </div>
    // )

    // let item;
    // if (isDone) {
    //     item = <h1>The task is completed</h1>
    // }
    // else {
    //     item = <h1>The task is not completed</h1>
    // }
    // return item

    return (
        <div>
            {isDone && <button>Sign up</button>}
            {isDone || <button>Get Back</button>}
        </div>
    )
}

export default Conditional