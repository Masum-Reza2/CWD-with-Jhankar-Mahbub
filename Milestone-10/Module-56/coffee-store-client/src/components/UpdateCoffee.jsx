import { useLoaderData } from "react-router-dom"
import swal from "sweetalert";

const UpdateCoffee = () => {
    const tobeUpdate = useLoaderData();
    console.log(tobeUpdate);
    const { _id, name, quantity, supplier, taste, category, details, photo } = tobeUpdate;

    const handleUpdateCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }

        // send data to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedCoffee),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    swal('yay', 'Updated successFully', 'success')
                }
            })

    }
    return (
        <div className="bg-pink-200 py-10">
            <h1 className="text-2xl text-orange-400 text-center ">Update coffee : {name}</h1>
            <form onSubmit={handleUpdateCoffee}>
                {/* name quantity */}
                <div className="flex items-center justify-center gap-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} className="input input-bordered " />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            Available Quantity
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* supplier taste */}
                <div className="flex items-center justify-center gap-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} className="input input-bordered " />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            Taste
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} className="input input-bordered" />
                        </label>
                    </div>
                </div>

                {/* category details */}
                <div className="flex items-center justify-center gap-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} className="input input-bordered " />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            Details
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} className="input input-bordered" />
                        </label>
                    </div>
                </div>

                {/* photo */}
                <div className="flex items-center justify-center gap-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} className="input input-bordered " />
                        </label>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <input type="submit" value="Update Coffee" className="btn btn-outline" />
                </div>
            </form>
        </div>
    )
}

export default UpdateCoffee