import { useContext } from "react"
import Level04 from "./Level04"
import { StateContext } from "./Level01"

const Level03 = () => {

    const [money, setMoney] = useContext(StateContext)

    return (
        <div className="mt-5">
            <h1>Level 03</h1>
            <button className="border px-3 py-1 shadow-lg shadow-black" onClick={() => setMoney(money + 500)}>Add money</button>
            <Level04 />
        </div>
    )
}

export default Level03
