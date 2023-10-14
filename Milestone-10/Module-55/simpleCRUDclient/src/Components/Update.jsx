import { useLoaderData } from "react-router-dom"

const Update = () => {

    const loadedUser = useLoaderData();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Updated')
                }
            });
    }

    return (
        <div>
            <h1>Update information of {loadedUser.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} />
                <br />
                <input type="text" name="email" defaultValue={loadedUser?.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default Update