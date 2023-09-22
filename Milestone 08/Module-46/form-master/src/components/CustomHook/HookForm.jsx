import useInputState from "../../hooks/useInputValue";

const HookForm = () => {

    const [name, onChange] = useInputState('')
    const [email, onEmailChange] = useInputState('')
    const [password, onpassChange] = useInputState('')
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(password)
    }
   
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input value={name} onChange={onChange} className="border border-black" type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input value={email} onChange={onEmailChange} className="border border-black" type="text" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password : </label>
                    <input value={password} onChange={onpassChange} className="border border-black" type="password" name="password" id="password" />
                </div>
                <input className="border bg-yellow-400 text-white px-3 py-1 rounded-md" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default HookForm