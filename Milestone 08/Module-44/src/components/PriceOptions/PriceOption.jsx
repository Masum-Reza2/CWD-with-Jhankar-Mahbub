import PropTypes from 'prop-types';

import Feature from "./Feature";

const PriceOption = ({ option }) => {

    let { name, features, price, } = option;

    return (
        <div className="p-5 space-y-5 flex flex-col justify-center items-center bg-blue-600 text-white rounded-lg">

            <p className="font-semibold text-lg"><span className="text-5xl">{price}$</span>/mon</p>

            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature} />)
                }
            </div>
            <button className="btn">Buy Now</button>
        </div>
    )
}

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption