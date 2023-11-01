/* eslint-disable react/prop-types */
const BookingCard = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { customerName, email, date, img, service, service_id, price, _id, status } = booking;



    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>$ {price}</td>
            <th>
                {
                    status === 'confirmed' ?
                        <p className="text-green-600">Confirmed</p>
                        :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs text-red-500">Confirm</button>
                }

            </th>
        </tr>
    )
}

export default BookingCard
