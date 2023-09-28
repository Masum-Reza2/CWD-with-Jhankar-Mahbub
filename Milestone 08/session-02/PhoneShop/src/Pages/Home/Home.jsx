import React from 'react'
import Banner from '../../components/Header/Banner/Banner'
import Phones from '../../components/Phones/Phones'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const phones = useLoaderData();

  return (
    <div>
      <Banner />
      <Phones phones={phones} />
    </div>
  )
}

export default Home
