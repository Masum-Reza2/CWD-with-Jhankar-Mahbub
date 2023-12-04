"use client"

// best practice
// next js components are by default server components.
// "use client" allows to use all hooks and react features.
// dont make the entire page as a client component.
// only make the particuler component.

import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div className="text-center space-y-3">
            <h1>Counter : {counter}</h1>
            <button className="border border-red-500 p-2 rounded-lg" onClick={() => setCounter(counter + 1)}>Increase</button>
            <button className="border border-red-500 p-2 rounded-lg ml-2" onClick={() => setCounter(counter - 1)}>Decrease</button>
        </div>
    )
}

export default Counter