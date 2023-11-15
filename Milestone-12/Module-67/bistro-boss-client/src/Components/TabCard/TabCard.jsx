import Swal from "sweetalert2";
import useGlobal from "../../Hooks/useGlobal";
import { useLocation, useNavigate } from "react-router-dom";
import useSecureAxios from "../../Hooks/useSecureAxios";
import useCarts from "../../Hooks/useCarts";

/* eslint-disable react/prop-types */
const TabCard = ({ data }) => {
    const { name, image, price, recipe, _id } = data;
    const { user } = useGlobal();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const secureAxios = useSecureAxios();

    const { refetch } = useCarts();

    const handleAddToCard = (item) => {
        if (user && user?.email) {
            // db activities
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price
            }
            secureAxios.post('/carts', cartItem)
                .then(res => {
                    if (res?.data?.insertedId); {
                        refetch();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to cart.`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(error => console.log(error))
        }
        else {
            Swal.fire({
                title: "You are not logged in?",
                text: "Please login to continue!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: pathname });
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-4 top-4 p-3 rounded-sm">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-justify">{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCard(data)} className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-500">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default TabCard
