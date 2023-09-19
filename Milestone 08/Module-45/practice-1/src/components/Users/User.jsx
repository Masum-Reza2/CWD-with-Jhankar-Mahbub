import { Link } from "react-router-dom";


const User = ({ user }) => {
    // console.log(user)
    let { id, name, email, phone, address } = user;
    return (
        <div style={{ border: '2px solid purple', borderRadius: '10px', padding: '5px', textAlign: 'center', marginBottom: '10px' }}>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Address : {address.city}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    )
}

export default User