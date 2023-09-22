import { useContext } from "react"
import { StrContext } from "./Level01"

const Level05 = () => {

    const data = useContext(StrContext)
    
  return (
    <div className="mt-5">
      <h1>Level 05</h1>
      <small>also have {data}</small>
    </div>
  )
}

export default Level05