const ReuseableForm = ({ formTitle, btnText, children, parentFunction }) => {
    // the prop children is a by default prop come from the parent inside

    const localHandleSubmit = e => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let userInfo = { name, email, password }

        // passing data to parent
        parentFunction(userInfo)
    }

    return (
        <div className="flex items-center justify-center flex-col space-y-1 py-5 ">
            <h1 className="text-2xl font-bold">{formTitle || 'Sign Up'}</h1>
            {children}
            <div className="shadow-lg p-5 shadow-gray-400 rounded-lg">
                <form onSubmit={localHandleSubmit} className="flex flex-col items-center justify-center space-y-2">
                    <div>
                        <input className="border border-black" type="text" name="name" placeholder="Name" />
                    </div>
                    <div>
                        <input className="border border-black" type="email" name="email" placeholder="Email" />
                    </div>
                    <div>
                        <input className="border border-black" type="password" name="password" placeholder="Password" />
                    </div>
                    <input className="border px-3 py-1 shadow-md shadow-gray-400 rounded-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem] cursor-pointer" type="submit" value={btnText || 'Submit'} />
                </form>
            </div>
        </div>
    )
}

export default ReuseableForm