import { useEffect, useRef } from "react";

// here we are going to learn useRef() hook specially used to deal with input fields(form).
// the form become uncontrolled bcz no need to declere state.

const RefForm = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const numberRef = useRef()

    // to set the cursor by default in the name field, remember here it is a sideEffect
    // whenever touching the dom always use useEffect() hook
    useEffect(() => {
        nameRef.current.focus() // by default setting the cursor in the name field.
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(numberRef.current.value)
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit}>
                {/* we can set default values in inputs */}
                <div>
                    <label htmlFor="name">Name : </label>
                    <input defaultValue={'john doe'} className="border border-black" type="text" name="name" id="name" ref={nameRef} />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input defaultValue={'mrx@gmail.com'} className="border border-black" type="email" name="email" id="email" ref={emailRef} />
                </div>
                <div>
                    <label htmlFor="number">Number : </label>
                    <input defaultValue={912837} className="border border-black" type="text" name="number" id="number" ref={numberRef} />
                </div>
                <input className="border bg-yellow-400 text-white px-3 py-1 rounded-md" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default RefForm