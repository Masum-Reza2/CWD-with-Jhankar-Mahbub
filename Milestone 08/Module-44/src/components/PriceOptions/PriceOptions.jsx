import { useEffect, useState } from "react"
import PriceOption from "./PriceOption"

const PriceOptions = () => {

    const [options, setOption] = useState([])

    useEffect(() => {
        fetch('./priceoption.json')
            .then(res => res.json())
            .then(data => setOption(data))
    }, [])

    return (
       <>
       <h1 className="text-center text-2xl mt-3 text-rose-500 font-bold">The best Gym in the Town</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[80%] mx-auto my-10">
            {
                options.map(option => <PriceOption key={option.id} option={option} />)
            }
        </div>
       </>
    )
}

export default PriceOptions