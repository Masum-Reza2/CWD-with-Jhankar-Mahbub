import swal from 'sweetalert';


const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee)

        // send data to server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            body: JSON.stringify(newCoffee),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal('yay', 'Added successFully', 'success')
                }
            })

    }

    return (
        <div className="bg-pink-200 py-10">
            <h1 className="text-2xl text-orange-400 text-center ">add a coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* name quantity */}
                <div className="flex items-center justify-center gap-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" className="input input-bordered " />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            Available Quantity
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" className="input input-bordered" />
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
                            <input type="text" name="supplier" className="input input-bordered " />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            Taste
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" className="input input-bordered" />
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
                            <input type="text" name="category" className="input input-bordered " />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            Details
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" className="input input-bordered" />
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
                            <input type="text" name="photo" className="input input-bordered " />
                        </label>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <input type="submit" value="Add Coffee" className="btn btn-outline" />
                </div>
            </form>
        </div>
    )
}

export default AddCoffee