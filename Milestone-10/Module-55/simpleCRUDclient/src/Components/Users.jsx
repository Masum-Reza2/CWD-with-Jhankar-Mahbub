import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom"

const Users = () => {
    const initialUser = useLoaderData();
    const [users, setUsers] = useState(initialUser);

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted');
                    console.log(data);
                }
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining);
            })
    }

    return (
        <div>
            <h1>Total user : {users.length}</h1>
            {
                users?.map(user => <div key={user?._id}>{user?.name} {user?.email}<button onClick={() => handleDelete(user?._id)}>X</button>
                    <Link to={`/update/${user._id}`}>
                        <button>Update</button>
                    </Link>
                </div>)
            }
        </div>
    )
}

export default Users