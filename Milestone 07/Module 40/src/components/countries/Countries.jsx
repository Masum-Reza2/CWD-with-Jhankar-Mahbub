import React, { useEffect, useState } from 'react'
import Country from '../Country'
import './counrtyContainer.css'

const Countries = () => {

    // state management
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    // console.log(country)

    const [visitedCountry, setVisitedCountry] = useState([]);

    const handleVisitedCountry = (countryName) => {
        console.log(countryName)
        let newVisitedCountry = [...visitedCountry, countryName]
        setVisitedCountry(newVisitedCountry);
    }

    const [visitedFlag, setVisitedFlag] = useState([]);
    const handleFlag = (flag) => {
        // console.log(flag)

        const flagArray = [...visitedFlag, flag]
        setVisitedFlag(flagArray);

        console.log(visitedFlag)
    }

    return (
        <div>
            <h2>countries : {country.length}</h2>
            <div>
                <h2>Visited countries : {visitedCountry.length}</h2>
                <ul>
                    {visitedCountry.map((country, index) => <li key={index}>{country.name.common}</li>)}
                </ul>
            </div>

            <div>
                <h1>Visited Flags</h1>
                {visitedFlag.map((flag, index) => {
                    return <img style={{ width: '100px', height: '100px', margin: '5px', borderRadius: '50%' }} key={index} src={flag} alt="" />
                })}
            </div>

            <div className='counrtyContainer'>
                {country.map(country => <Country key={country.name.common} country={country} handleVisitedCountry={handleVisitedCountry} handleFlag={handleFlag} />)}
            </div>
        </div>
    )
}

export default Countries