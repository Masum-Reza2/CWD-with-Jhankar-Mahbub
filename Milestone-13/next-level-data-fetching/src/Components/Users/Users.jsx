"use client" // **************the most important keyword***********
import { useEffect, useState } from "react"

const Users = () => {

    //  here we can also use tanstack query axios and so on.
    //  client side data fetching.
    const [users, setUsers] = useState();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h1>Total Users : {users?.length}</h1>
            <div className="grid gap-5 w-[80%] mx-auto grid-cols-1">
                {
                    users?.map(user => <div key={user?.id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <p>{user.email}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Users