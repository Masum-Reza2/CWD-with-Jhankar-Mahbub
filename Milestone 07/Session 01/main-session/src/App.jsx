import { useState } from 'react'
import './App.css'
import Gradnpa from './propsDrilling/Gradnpa'
import FetchData from './DATAFETCHING/FetchData'

let myArr = [
  { id: 1, name: 'masum', age: 22 },
  { id: 2, name: 'tattu', age: 25 },
  { id: 3, name: 'dasy', age: 27 },
  { id: 4, name: 'lazy', age: 32 },
  { id: 5, name: 'rexa', age: 26 },
]


function App() {

  const [datas, setDatas] = useState(myArr)


  let handleAllDelete = () => {
    setDatas([])
  }

  let handleDelete = (id) => {
    // console.log(id)
    let filteredData = datas.filter(data => data.id !== id)
    // console.log(filteredData)
    setDatas(filteredData)
  }

  return (
    <div className='text-center'>
      {datas.map(data => {
        return (
          <div key={data.id}>
            <h1 className='text-lg font-bold'>{data.name}</h1>
            <div>
              <button onClick={() => handleDelete(data.id)} className='btn btn-sm'>delete</button>
            </div>
          </div>
        )
      })}

      <button onClick={handleAllDelete} className='btn btn-error mt-2'>delete all</button>

      {/* props drilling */}
      <Gradnpa />

      <FetchData />

    </div>
  )
}

export default App