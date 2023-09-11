import React, { useEffect, useState } from 'react'
import WatchCard from './WatchCard';

// local
// local variables 



const ClockWatch = () => {

    // local json
    const [clocks, setClocks] = useState([])
    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json())
            .then(data => setClocks(data))
    }, [])
    

    return (
        <div>
            {clocks.map((clock, index) => <WatchCard key={index} clock={clock} />)}
        </div>
    )
}

export default ClockWatch