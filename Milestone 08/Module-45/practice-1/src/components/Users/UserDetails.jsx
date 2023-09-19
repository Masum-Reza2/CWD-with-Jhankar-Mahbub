import { useLoaderData } from "react-router-dom"

const UserDetails = () => {


    const singleUser = useLoaderData();
    console.log(singleUser)
    let { address, company, email, id, name, phone, username, website } = singleUser;
    let { street, city, zipcode, } = address;
    let { name: Cname } = company;
    return (
        <div style={{border:'2px solid red'}}>
            <h2>details about user</h2>
            <p>Name : {name}</p>
            <p>UserName : {username}</p>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>
            <p>Street : {street}</p>
            <p>City : {city}</p>
            <p>Zipcode : {zipcode}</p>
            <p>Company : {Cname}</p>
        </div>
    )
}

export default UserDetails