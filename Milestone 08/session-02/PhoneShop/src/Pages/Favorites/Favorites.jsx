import React, { useEffect, useState } from 'react'
import { getStoredData } from '../../Utilities/Localstorage'
import { useLoaderData } from 'react-router-dom'
import FavoriteCard from './FavoriteCard'

import swal from 'sweetalert'

const Favorites = () => {

  const phones = useLoaderData()
  const [allPhones, setAllPhones] = useState([])
  // const [toggle, setToggle] = useState(false)
  const [phoneLength, setPhoneLength] = useState(4)
  const [btnTog, setBtnTog] = useState(true)


  const handleRemove = () => {
    localStorage.clear()
    // setToggle(!toggle) //the dependency of useEffect should re-render based on a state
    setAllPhones([]) //to see immediate change in the UI, update the state.
    swal("Good job!", "Removed Successfully!", "success")
  }

  const handleSeeMore = () => {
    setBtnTog(!btnTog)
    setPhoneLength(allPhones.length)
  }
  const handleSeeLess = () => {
    setBtnTog(!btnTog)
    setPhoneLength(4)
  }


  useEffect(() => {
    const favoriteIds = getStoredData()
    let requiredPhones = []
    favoriteIds.forEach(element => {
      let favoritePhone = phones.find(phone => phone.id === element)
      requiredPhones.push(favoritePhone)
    })
    setAllPhones(requiredPhones)

  }, [phones])

  let totalPrice = allPhones.reduce((pre, curr) => pre + curr.price, 0)



  return (
    <div className='w-[90%] mx-auto'>

      <div className='text-center pt-7 space-y-3'>
        <h1 className='font-semibold text-xl'>Favorites : {allPhones.length}</h1>
        <h1 className='font-semibold text-xl underline'>Total Price : {totalPrice.toFixed(2)}$</h1>
        <button onClick={handleRemove} className='border px-3 py-1 rounded-sm shadow-md shadow-gray-500'>Remove All</button>
      </div>

      <div>
        {
          allPhones.length ?
            <>
              <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>
                {allPhones.slice(0, phoneLength).map(phone => <FavoriteCard key={phone.id} phone={phone} />)}
              </div>
              <div>
                {allPhones.length > 5 &&
                  <div className='text-center pb-5'>
                    {btnTog ? <button className='border px-3 py-1 shadow-md shadow-gray-500 rounded-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]' onClick={handleSeeMore}>See More</button> :
                      <button className='border px-3 py-1 shadow-md shadow-gray-500 rounded-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]' onClick={handleSeeLess}>See Less</button>}
                  </div>
                }
              </div>
            </>

            :

            <h1 className='h-[80vh] flex items-center justify-center font-bold text-2xl' style={{ textShadow: '1px 1px 1px red' }}>No Favorites found</h1>
        }
      </div>
    </div>
  )
}

export default Favorites