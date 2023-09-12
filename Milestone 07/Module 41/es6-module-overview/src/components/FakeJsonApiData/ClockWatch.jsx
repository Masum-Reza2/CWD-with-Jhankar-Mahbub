import React, { useEffect, useState } from 'react'
import WatchCard from './WatchCard';

// local
// local variables 



const ClockWatch = () => {

    // local json
    // const [clocks, setClocks] = useState([])
    // useEffect(() => {
    //     fetch('watches.json')
    //         .then(res => res.json())
    //         .then(data => setClocks(data))
    // }, [])

    // github host
    const [clocks, setClocks] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Masum-Reza2/CWD-with-Jhankar-Mahbub/main/Milestone%2007/Module%2041/es6-module-overview/public/watches.json')
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