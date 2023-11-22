import { AiFillDelete } from "react-icons/ai";
import useCarts from "../../Hooks/useCarts"
import Swal from "sweetalert2";
import useSecureAxios from "../../Hooks/useSecureAxios";
import { Link } from "react-router-dom";

const Cart = () => {
    const { carts, refetch } = useCarts();
    const totalPrice = carts?.reduce((prev, curr) => prev + curr?.price, 0)

    const secuerAxios = useSecureAxios();

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

                secuerAxios.delete(`/carts/${id}`)
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
        <div>
            <div className="flex  items-center justify-evenly">
                <h2 className="text-3xl font-medium py-2">My Cart items : {carts?.length}</h2>
                <h2 className="text-3xl font-medium py-2">Total price : ${totalPrice}</h2>
                <Link to={carts?.length ? '/dashboard/payment' : '#'}>
                    <button disabled={!carts.length} className="btn btn-error btn-sm text-white">Pay</button>
                </Link>
            </div>

            {/* table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-yellow-600 text-white">
                        <tr>
                            <th>

                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts?.map((item, index) => <tr key={item?._id}>
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
                                <td>${item?.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item?._id)} className=""><AiFillDelete className="text-3xl text-red-500" /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default Cart