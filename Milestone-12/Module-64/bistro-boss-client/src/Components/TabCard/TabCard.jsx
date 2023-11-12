/* eslint-disable react/prop-types */
const TabCard = ({ data }) => {
    const { name, image, price, recipe } = data;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-4 top-4 p-3 rounded-sm">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-justify">{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default TabCard
