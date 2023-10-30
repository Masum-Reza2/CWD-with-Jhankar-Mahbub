import { Link } from "react-router-dom"

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-[30vh]" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-start text-2xl">{title}</h2>
                <div className="flex justify-between">
                    <p className="text-orange-600 font-bold">Price : ${price}</p>
                    <Link to={`checkout/${_id}`}>
                        <button className="btn btn-sm text-orange-500 font-bold">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard