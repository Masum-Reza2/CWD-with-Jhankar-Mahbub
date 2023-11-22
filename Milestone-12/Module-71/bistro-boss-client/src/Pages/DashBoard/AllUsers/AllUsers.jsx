import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../Hooks/useSecureAxios"
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const secureAxios = useSecureAxios();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await secureAxios.get(`/users`)
            return res.data;
        }
    })

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are going to make admin '${user?.name}'`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                secureAxios.patch(`/users/admin/${user?._id}`)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            Swal.fire({
                                title: "Done!",
                                text: `${user?.name} is admin now.`,
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            } else {
                Swal.fire({
                    title: "Cancelled!",
                    text: "You cancel the the process.",
                    icon: "error"
                });
            }
        });
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                secureAxios.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            } else {
                Swal.fire({
                    title: "Cancelled!",
                    text: "You cancel the deletion.",
                    icon: "error"
                });
            }
        });
    }

    return (
        <>
            <div className="flex justify-evenly text-2xl">
                <div>All Users</div>
                <div>Total Users {users?.length}</div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map((user, index) => <tr key={user?._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email || 'not found'}</td>
                                <td>
                                    {
                                        user?.role === 'admin' ?
                                            <>Admin</>
                                            :
                                            <>
                                                <FaUsers onClick={() => handleMakeAdmin(user)} className="text-white bg-yellow-700 rounded-lg text-2xl cursor-pointer" />
                                            </>
                                    }

                                </td>
                                <td className="btn btn-ghost" onClick={() => handleDelete(user?._id)}>
                                    <FaTrash className="text-red-500 text-lg cursor-pointer" />
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AllUsers