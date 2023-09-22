// hooks are just a build in function in react.
// we can create a custom hook like this very easily .
// and we can use the build in hooks of react in our custom hooks and it makes our life more easier.

import { useState } from "react"

const useInputState = (defVal = null) => {
    const [value, setVlaue] = useState(defVal)

    const onChange = (e) => {
        setVlaue(e.target.value)
    }
    return [value, onChange] //we can return as an object also 
}
export default useInputState;