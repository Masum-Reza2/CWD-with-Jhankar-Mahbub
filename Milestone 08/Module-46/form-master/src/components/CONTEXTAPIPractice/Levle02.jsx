import { useContext } from "react"
import Level03 from "./Level03"
import { StateContext } from "./Level01"

const Levle02 = () => {

    const [money, setMoney] = useContext(StateContext)

    return (
        <div>
            <h1>Level 02</h1>
            <small>showing money : <strong>{money}</strong></small>
            <Level03 />
        </div>
    )
}

export default Levle02