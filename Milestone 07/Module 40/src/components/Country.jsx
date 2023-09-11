import React, { useState } from 'react'
import './country.css'
import Drilling from './Drilling';


const Country = ({ country, handleVisitedCountry, handleFlag }) => {
  let { name, capital, flags, population, area, cca2 } = country;

  const [visited, setVisited] = useState(false)

  const handleVisit = () => {
    // setVisited(true)

    setVisited(!visited)


    // toggling
    // if(visited){
    //   setVisited(false)
    // }
    // else{
    //   setVisited(true)
    // }
  }

  return (
    <div className={`${visited && 'visited'}`} style={{ border: '2px solid purple', borderRadius: '10px', margin: '10px auto', padding: '10px', }}>
      <h2 style={{ color: visited ? 'red' : 'black ' }}>Name : {name.common}</h2>
      <h2>Capital : {capital}</h2>
      <img src={flags.png} alt="" />
      <div>
        <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
        <div>
          <button onClick={() => handleFlag(flags.png)}>Add Flag</button>
        </div>
      </div>
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>CountryCode : {cca2}</p>
      <div>
        <button onClick={handleVisit}>{visited ? 'Visited' : 'Visit'}</button>
      </div>
      <div>
        {/* {visited || <p>I want to visit this country</p>}
        {visited && <p>I have visited the country</p>} */}
        {visited ? <p>I have visited the country</p> : <p>I want to visit</p>}
      </div>

      <Drilling country={country} handleVisitedCountry={handleVisitedCountry} handleFlag={handleFlag}/>

    </div>
  )
}

export default Country