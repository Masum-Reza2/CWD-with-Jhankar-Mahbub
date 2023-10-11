import { Link, useLoaderData } from "react-router-dom"


const Phones = () => {
    const phones = useLoaderData()
    // console.log(phones, 'phones here')
    return (
        <div>
            <h1>All phones here : {phones.length}</h1>
            {
                phones.map((phone, index) => <Link to={`/phone/${phone.id}`} key={index}><li>{phone?.phone_name}</li></Link>)
            }

        </div>
    )
}

export default Phones