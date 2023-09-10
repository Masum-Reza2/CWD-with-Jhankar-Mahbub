import React, { useEffect, useState } from 'react'
import Card from './Card'

const FetchData = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        let allData = async () => {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = await res.json();
            setData(data)
        }
        allData()
    }, [])

    return (
        <>
            {data.map((data, index) => {
                return <Card key={index} data={data}/>
            })}

        </>
    )
}

export default FetchData
