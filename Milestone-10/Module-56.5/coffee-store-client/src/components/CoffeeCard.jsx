import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = id => {
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
                fetch(`https://coffee-store-server-ovh7gifky-masum-rezas-projects.vercel.app/coffee/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            const remaining = coffees.filter(cof => cof._id !== id);
                            setCoffees(remaining)
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
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
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-[150px]" src="https://s23209.pcdn.co/wp-content/uploads/2015/07/Perfect-Iced-CoffeeIMG_0074.jpg" alt="Movie" /></figure>
                <div className="flex w-full justify-between px-10 items-center">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-2">
                            <button className="btn">View</button>
                            <Link to={`/updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                            <button className="btn btn-error" onClick={() => handleDelete(_id)}>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard