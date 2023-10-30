import { useEffect, useState } from "react"
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="flex flex-col items-center gap-3 py-3">
                <h1 className="text-2xl text-orange-500">Services</h1>
                <h5 className="text-4xl font-bold">Our Service Area</h5>
                <p className="w-1/2 text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map((service, index) => <ServiceCard key={index} service={service} />)
                }
            </div>

        </div>
    )
}

export default Services