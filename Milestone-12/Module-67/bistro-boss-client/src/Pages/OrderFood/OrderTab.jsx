import TabCard from "../../Components/TabCard/TabCard"

/* eslint-disable react/prop-types */
const OrderTab = ({ data }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 w-[90%] mx-auto gap-10 py-10">
            {
                data?.map(item => <TabCard data={item} key={item._id} />)
            }
        </div>
    )
}

export default OrderTab