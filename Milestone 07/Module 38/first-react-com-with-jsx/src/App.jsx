import './App.css'

function FirstComponent() {

  let students = [
    { name: 'Masum Reza', age: 22, classIn: 12, section: 'A', favSub: 'Geography' },
    { name: 'Tareq Rahman', age: 23, classIn: 12, section: 'B', favSub: 'English' },
    { name: 'Selim Hossain', age: 25, classIn: 12, section: 'B', favSub: 'Chemistry' },
    { name: 'Selim Hossain', age: 25, classIn: 12, section: 'B', favSub: 'Chemistry' },
    { name: 'Selim Hossain', age: 25, classIn: 12, section: 'B', favSub: 'Chemistry' },
    { name: 'Selim Hossain', age: 25, classIn: 12, section: 'B', favSub: 'Chemistry' },
    { name: 'Selim Hossain', age: 25, classIn: 12, section: 'B', favSub: 'Chemistry' },
    { name: 'Masum Reza', age: 22, classIn: 12, section: 'A', favSub: 'Geography' },
    { name: 'Selim Hossain', age: 25, classIn: 12, section: 'B', favSub: 'Chemistry' },
  ]


  return (
    students.map((student, index) => {
      
      let { name, age, classIn, section, favSub } = student;

      let studentStyle = { width: 'fit-content', boxShadow: '2px 4px 4px black', padding: '10px', borderRadius: '7px' }


      return (
        <div key={index} style={studentStyle}>
          <h1>Student info</h1>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Class: {classIn}</p>
          <p>Section: {section}</p>
          <p>Fav Sub: {favSub}</p>
        </div>
      )
    })
  )
}


function App() {

  return (
    <>
      <h1>Hello React</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <FirstComponent />
      </div>
    </>
  )
}

export default App