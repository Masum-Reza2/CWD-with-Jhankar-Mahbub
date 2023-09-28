import Phone from "./Phone"

const Phones = ({ phones }) => {

    return (
        <div className='w-[90%] mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5'>
            {
                phones?.map(phone => <Phone key={phone.id} phone={phone} />)
            }
        </div>
    )
}

export default Phones