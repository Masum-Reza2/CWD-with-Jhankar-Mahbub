import { useLoaderData } from "react-router-dom"
import useGlobal from "../../Hooks/useGlobal";

const Checkout = () => {
    const service = useLoaderData();
    const { title, price, service_id, _id, img } = service;
    const { user } = useGlobal();

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;

        const order = {
            customerName: name,
            email,
            date,
            img,
            service_id: _id,
            service: title,
            price,
        }

        const ensure = confirm(`Are you sure you want to order ${title}`)
        if (ensure) {
            fetch('http://localhost:5000/bookings', {
                method: 'POST',
                body: JSON.stringify(order),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json.insertedId) {
                        alert('Data added in DB')
                    }
                });
        }
    }

    return (
        <div>
            <h1 className="text-center font-bold text-lg">Book Service for - {title}</h1>
            <form onSubmit={handleOrder}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                    <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} className="border border-black input" />
                    <input type="date" name="date" className="border border-black input" />
                    <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="border border-black input" />
                    <input type="text" name="price" placeholder="Due Amount" defaultValue={`$ ${price}`} className="border border-black input" />
                </div>
                <div className="grid grid-cols-1 gap-5 py-3">
                    <textarea className="border-black border" name="" id="" cols="100" rows="10"></textarea>
                    <button type="submit" className="bg-orange-500 hover:bg-orange-500 text-white btn btn-block">Order Confirm</button>
                </div>
            </form>

        </div>
    )
}

export default Checkout