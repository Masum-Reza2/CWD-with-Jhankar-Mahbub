const Form = () => {
    // by nature when a form clicked to be submit, it automatically realoads the page.
    // to prevent this behaviour the following function is called there e.preventDefault()

    const handleSubmit = (e) => {
        e.preventDefault()
        let name = e.target.name.value;
        let email = e.target.email.value;
        let number = e.target.number.value;

        let userInfo = { name, email, number }
        console.log(name, email, number)
        console.log(userInfo)
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input className="border border-black" type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input className="border border-black" type="text" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="number">Number : </label>
                    <input className="border border-black" type="text" name="number" id="number" />
                </div>
                <input className="border bg-yellow-400 text-white px-3 py-1 rounded-md" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form