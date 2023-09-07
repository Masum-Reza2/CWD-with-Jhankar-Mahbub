import './App.css'

function StudentInfo({ name, section, classIn, roll, isDone }) {
  // rather than receiving the props we can directly destructure it instant
  // props are raed only, we can't modify their value, if will error

  let studentStyle = {
    width: 'fit-content',
    boxShadow: '3px 4px 3px black',
    padding: '10px'
  }

  // conditional rendering
  if (isDone) {
    return (
      <div style={studentStyle}>
        <h2>Name : {name}</h2>
        <h2>Section : {section}</h2>
        <h2>Class : {classIn}</h2>
        <h2>Roll : {roll}</h2>

        {/* conditional element creation option 1 */}
        {isDone && <button>He is done</button>}
        {isDone || <button>He is Not done</button>}

      </div>
    )
  }
  else {
    return (
      <h1>He is not done</h1>
    )
  }

}

function App() {

  return (
    <>
      <StudentInfo name={'Masum Reza'} section={'A'} classIn={13} roll={1} isDone={true} />
    </>
  )
}

export default App
