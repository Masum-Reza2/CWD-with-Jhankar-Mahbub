// the usage of context API.
// context API is the solution of props drilling.

// >>>usage<<<
// 1.create a context and export it.
// 2.Add provider for the context with a value. Value can be any object.
// 3.use the useContext hook in the required component to access the value.
import { createContext, useState } from 'react'
import Father from './Father'

export const AssetContext = createContext()
export const MoneyState = createContext()

const Grandpa = () => {
    const [money, setMoney] = useState(1000)

    return (
        <MoneyState.Provider value={[money, setMoney]}>
            <AssetContext.Provider value={'Gold'}>
                <div className='h-screen flex flex-col items-center justify-center'>
                    <div className='font-bold text-2xl p-10 border border-black'>
                        <h1 className=''>Grandpa have {money} TK</h1>
                        <Father />
                    </div>
                </div>
            </AssetContext.Provider>
        </MoneyState.Provider>
    )
}

export default Grandpa