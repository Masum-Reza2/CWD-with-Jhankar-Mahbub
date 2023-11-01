import { useEffect, useState } from "react";
import useGlobal from "../../Hooks/useGlobal";
import BookingCard from "./BookingCard";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
    const { user } = useGlobal();
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    //  this is how we can send dynamic query's in the backend.
    // const url = `https://car-doctor-server-2q5x4k0ma-masum-rezas-projects.vercel.app/bookings?email=${user?.email}&sort=1`
    const url = `/bookings?email=${user?.email}&sort=1`

    useEffect(() => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data)
        //     })

        // using axios
        // axios.get(url, { withCredentials: true })
        //     .then(res => {
        //         setBookings(res.data)
        //     })
        //     .catch(error => console.log(error.message))

        // custom hook axios calling
        axiosSecure.get(url)
            .then(res => {
                setBookings(res.data)
            })
            .catch(error => console.log(error.message))

    }, [axiosSecure, url])

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete this booking')
        if (proceed) {
            fetch(`https://car-doctor-server-2q5x4k0ma-masum-rezas-projects.vercel.app/bookings/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('deleted');
                        const remaining = bookings.filter(book => book?._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleBookingConfirm = (id) => {
        fetch(`https://car-doctor-server-2q5x4k0ma-masum-rezas-projects.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                status: 'confirmed'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.modifiedCount) {
                    alert('confirmed');

                    //  state update to see immediately in the UI.

                    const remaining = bookings.filter(sBooking => sBooking._id !== id);
                    const updated = bookings.find(singleBook => singleBook._id === id);
                    updated.status = 'confirmed';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            });
    }


    return (
        <div>
            <h1 className="text-center font-semibold text-3xl ">Your Bookings : {bookings.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bookings?.map((booking, index) => <BookingCard booking={booking} key={index} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm} />)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Bookings