const Root = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.insertedId) {
                    alert('User send to database');
                    form.reset();
                }
            });

    }

    return (
        <div>
            <h1>Simple CRUD Client</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="text" name="email" />
                <br />
                <button type="submit">Add user</button>
            </form>
        </div>
    )
}

export default Root