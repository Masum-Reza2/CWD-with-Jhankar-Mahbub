import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='py-5'>
      <h1 className='text-2xl text-purple-500 text-center'>Hot hot cold Coffees : {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-6 w-[90%] mx-auto mt-10'>
        {
          coffees?.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />)
        }
      </div>
    </div>
  )
}

export default App