// the values starts with the keyword 'use' is called hook.
// >>>let's learn useEffect<<<<
// to handle any side effect(specially when fetching data) useEffect is used.

import { useEffect, useState } from "react"


const LearnUseEffect = () => {
    // step 1 declere state
    const [users, setUsers] = useState([])
    // step 2
    // useEffect function takes 2 params (callbackFunction, Dependencies)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => setUsers(res))
    }, [])
    return (
        <div>
            <h1>Users : {users.length}</h1>
        </div>
    )
}

export default LearnUseEffect