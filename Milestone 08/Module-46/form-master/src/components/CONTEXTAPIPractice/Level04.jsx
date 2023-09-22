import { useContext } from "react"
import Level05 from "./Level05"
import { StateContext } from "./Level01"

const Level04 = () => {

    const [money] = useContext(StateContext)

    return (
        <div className="mt-5">
            <h1>Level 04</h1>
            <small>also showing money <strong> {money}</strong></small>
            <Level05 />
        </div>
    )
}

export default Level04
