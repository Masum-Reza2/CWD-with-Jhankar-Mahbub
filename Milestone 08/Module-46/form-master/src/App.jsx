import './App.css'
import Level01 from './components/CONTEXTAPIPractice/Level01'
import Grandpa from './components/ContextAPI/Grandpa'
import HookForm from './components/CustomHook/HookForm'
import Form from './components/Form'
import RefForm from './components/RefForm'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
import StatefulForm from './components/StatefulForm'

function App() {

  const handleSubmit = (data) => {
    console.log('Sign up data', data)
  }

  const handleUpdate = (data) => {
    console.log('Update profile data', data)
  }

  return (
    <>
      {/* <Form /> */}
      {/* <StatefulForm /> */}
      {/* <RefForm /> */}

      {/* <HookForm /> */}

      {/* call 01 */}
      {/* <ReuseableForm formTitle={'Sign Up'} btnText={'Submit'} parentFunction={handleSubmit}>
        <p>Please sign up and submit your info.</p>
        <small>This is a children object</small>
      </ReuseableForm> */}

      {/* call 02 */}
      {/* <ReuseableForm formTitle={'Update Profile'} btnText={'Update'} parentFunction={handleUpdate}>
        <p>Please update your information</p>
        <p>This is children prop</p>
      </ReuseableForm> */}


      {/* contextAPI */}
      {/* <Grandpa /> */}

      {/* context api practice */}
      <Level01 />

    </>
  )
}

export default App