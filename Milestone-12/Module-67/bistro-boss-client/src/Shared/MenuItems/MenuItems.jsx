/* eslint-disable react/prop-types */
const MenuItems = ({ data }) => {
    const { name, image, price, recipe } = data;
    return (
        <div className="flex space-x-5 w-[90%] mx-auto">
            <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-lg">{name}------------------</h3>
                <p className="text-gray-600">{recipe}</p>
            </div>
            <p className="text-yellow-600">$Price:{price}</p>
        </div>
    )
}

export default MenuItems