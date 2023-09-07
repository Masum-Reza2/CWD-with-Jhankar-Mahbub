import React from 'react'

let students = [
    { name: 'Masum Reza', age: 22, section: 'A', roll: 1 },
    { name: 'Abraham linkon', age: 23, section: 'B', roll: 5 },
    { name: 'Albert Einstein', age: 25, section: 'B', roll: 7 },
    { name: 'Galilio galilai', age: 28, section: 'A', roll: 8 },
    { name: 'Lionardo The vinchi', age: 28, section: 'A', roll: 10 },
]
// directly destructured
function Card({ name, age, section, roll }) {
    // let {name, age, section, roll} = props;
    return (
        <div style={{ width: 'fit-content', boxShadow: '2px 4px 4px black', padding: '10px', textAlign: 'center' }}>
            <h2>Name : {name || 'dynamic'}</h2>
            <h2>Age : {age || 'Dynamic'}</h2>
            <h2>Section : {section || 'dynamic'}</h2>
            <h2>Roll : {roll || 'dynamic'}</h2>
        </div>
    )
}

// also there directly destructured
let mappedData = students.map(({ name, age, section, roll }, index) => {
    // let {name, age, section, roll} = student;
    return (
        <Card key={index} name={name} age={age} section={section} roll={roll} />
    )
})

const Mapping = () => {
    return (
        <>
            {/* <h1>Hello world</h1>  
            <Card />         */}
            <div style={{display:'flex', gap:'10px'}}>
                {mappedData}
            </div>
        </>
    )
}

export default Mapping