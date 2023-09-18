import PropTypes from 'prop-types';

import { BsFillCheckCircleFill } from 'react-icons/bs';

const Feature = ({ feature }) => {
    
    return (
        <div className='flex items-center gap-4'>
            <BsFillCheckCircleFill />
            <p> {feature}</p>
        </div>
    )
}

Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature