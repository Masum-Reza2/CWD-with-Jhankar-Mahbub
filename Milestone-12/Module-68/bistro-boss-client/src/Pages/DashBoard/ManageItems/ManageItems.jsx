import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import useMenus from "../../../Hooks/useMenus"
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const { menus, refetch } = useMenus();
    const secureAxios = useSecureAxios();

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await secureAxios.delete(`/menus/${item?._id}`)
                if (res.data.deletedCount) {
                    // refetch to update the UI
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${item?.name} has been deleetd!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            } else {
                Swal.fire({
                    title: "cancelled!",
                    text: "cancelled",
                    icon: "error"
                });
            }
        });
    }


    const handleUpdate = (item) => {
        console.log('update', item)
    }

    return (
        <div>
            <div className="-mt-14">
                <SectionTitle heading={'Manage all items'} subHeading={'Hurry up!'} />
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>

                                </th>

                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menus?.map((item, index) => <tr key={item?._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item?.name}
                                    </td>
                                    <td>{item?.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item?._id}`}>
                                            <button className="btn btn-ghost"><FaEdit className="text-lg" /></button>
                                        </Link>
                                    </td>
                                    <td onClick={() => handleDelete(item)}>
                                        <button className="btn btn-ghost"><AiFillDelete className="text-lg" /></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageItems