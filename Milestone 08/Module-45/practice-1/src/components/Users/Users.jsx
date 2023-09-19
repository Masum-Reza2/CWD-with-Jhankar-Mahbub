// there are a little difference in route based data fetching. **fetch the data in route directory.
// this way of data fetching only fetch the data when the required path is calling.

import { useLoaderData } from "react-router-dom"
import User from "./User";

const Users = () => {
    const allUser = useLoaderData(); //by this function fetch data in received
    // console.log(allUser)

    return (
        <div>
            <h1>Users : {allUser.length}</h1>
            <div>
                {
                    allUser.map((user, index) => <User key={index} user={user} />)
                }
            </div>
        </div>
    )
}

export default Users