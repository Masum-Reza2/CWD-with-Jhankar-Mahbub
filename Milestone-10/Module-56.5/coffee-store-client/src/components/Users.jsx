import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const handleDelete = (id) => {
        //  reacommended way to confirm user at first using swal
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-ovh7gifky-masum-rezas-projects.vercel.app/user/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            // remove the user from the UI
                            const remaining = users.filter(sUser => sUser._id !== id);
                            setUsers(remaining);

                            Swal.fire(
                                'Deleted!',
                                'Your user has been deleted.',
                                'success'
                            )
                        }
                    })
            }
            else {
                Swal.fire(
                    'Cancelled!',
                    'Your coffee deletion has been cancelled.',
                    'error'
                )
            }
        })
    }

    return (
        <div>
            <Navbar />
            <h1 className="text-2xl text-orange-500 font-semibold text-center">Users : {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>CreatedAt</th>
                            <th>Last Logged At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user?.createdAt}</td>
                                <td>{user?.lastLoggedAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user?._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users