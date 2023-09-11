import React from 'react'
import NestedDrilling from './NestedDrilling';

const Drilling = (props) => {
    // console.log(props)

    let { country, handleVisitedCountry, handleFlag } = props;


    return (
        <div>
            <NestedDrilling {...props}/>
        </div>
    )
}

export default Drilling