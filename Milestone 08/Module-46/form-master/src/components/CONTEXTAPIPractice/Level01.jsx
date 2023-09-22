import { createContext, useState } from "react"
import Levle02 from "./Levle02"

export const StrContext = createContext();
export const StateContext = createContext();

const Level01 = () => {

    const smStr = 'simple string'
    const [money, setMoney] = useState(1000)

    return (
        <>
            <StateContext.Provider value={[money, setMoney]}>
                <StrContext.Provider value={smStr}>
                    <div className="h-screen flex flex-col items-center justify-center">
                        <div className="space-y-3">
                            <h1>Level 01</h1>
                            <small>Have {smStr}</small>
                            <Levle02 />
                        </div>
                    </div>
                </StrContext.Provider>
            </StateContext.Provider>
        </>
    )
}

export default Level01


// yes this is the solution of props drilling. just like props we can pass anything in very simple way.