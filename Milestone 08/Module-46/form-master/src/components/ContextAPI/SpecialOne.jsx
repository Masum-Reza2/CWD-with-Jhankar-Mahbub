import { useContext } from "react"
import { AssetContext, MoneyState } from "./Grandpa"

const SpecialOne = () => {
  const gift = useContext(AssetContext)
  const [money, setMoney] = useContext(MoneyState)

  return (
    <div>
      <h1>Special one has {gift} pa money {money}</h1>
      <button className="border" onClick={() => setMoney(money + 500)}>Increase</button>
    </div>
  )
}

export default SpecialOne