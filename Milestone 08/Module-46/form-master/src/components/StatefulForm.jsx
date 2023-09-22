import { useState } from "react"
// i have learn it before follow anisul islam's folder and explore in details.

// here we explore individual state for each field
//  this is so called controlled form mgt

const StatefulForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setNumber(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault();
        if (number.length < 11) {
            return setError('Number should be at least 11 in digit')
        }
        setError('')
        let userInfo = { name, email, number }
        console.log(userInfo)
    }



    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input onChange={handleName} className="border border-black" type="text" name="name" id="name" value={name} />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input onChange={handleEmail} className="border border-black" type="email" name="email" id="email" value={email} />
                </div>
                <div>
                    <label htmlFor="number">Number : </label>
                    <input onChange={handlePassword} className="border border-black" type="text" name="number" id="number" value={number} />
                </div>
                <input className="border bg-yellow-400 text-white px-3 py-1 rounded-md" type="submit" value="Submit" />
            </form>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}

export default StatefulForm