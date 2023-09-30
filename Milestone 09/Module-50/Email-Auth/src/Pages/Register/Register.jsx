import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Register = () => {
  const [regError, setRegError] = useState('');
  const [regSuccess, setRegSuccess] = useState('');

  // password show
  const [showPass, setShowPass] = useState(false)
  const handleShow = () => {
    setShowPass(!showPass)
  }

  const inputStyle = "border text-center py-1 rounded-sm shadow-md shadow-gray-400 mt-2 focus:outline-none w-[25vw]";

  const handleRegister = e => {
    e.preventDefault();

    // clearing the states when the submit button is clicking again
    setRegError('')
    setRegSuccess('')

    const email = e.target.email.value;
    const password = e.target.password.value;
    const termsCondition = e.target.terms.checked;
    console.log(email, password, termsCondition)

    // validation using regex
    if (password.length < 6) {
      setRegError('Short Password')
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      setRegError('At least one upperCase charecer')
      return;
    }
    else if (!termsCondition) {
      setRegError('Please accept terms and consitions')
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setRegSuccess('Account created successfully')
        console.log(user)

        updateProfile(auth.currentUser, {
          displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
        })

        sendEmailVerification(auth.currentUser)
          .then(result => {
            console.log(result)
            alert('Email verification send')
          })

      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setRegError(errorMessage)
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-bold">Please Register</h1>
        <form onSubmit={handleRegister}>

          <input className={inputStyle} type="email" name="email" id="email" placeholder="Enter your E-mail" required />
          <br />
          <div className="relative">
            <input className={inputStyle} type={!showPass ? 'password' : 'text'} name="password" id="password" placeholder="Create a Password" required />
            <span onClick={handleShow} className="cursor-pointer absolute bottom-1 right-3">
              {showPass ? <AiFillEyeInvisible className="text-xl" /> : <AiFillEye className="text-xl" />}
            </span>
          </div>
          <br />
          <div className="space-x-3">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Accept terms and conditions</label>
          </div>
          <input className="mt-2 border shadow-md px-3 py-1 shadow-gray-400 rounded-sm font-semibold cursor-pointer" type="submit" value="Submit" />

        </form>
        <p>Already have an account ? Please <Link className="border px-3 py-1 shadow-md shadow-gray-400 rounded-sm " to={'/login'}>Login</Link></p>
      </div>

      {
        regError && <p className="text-red-700 font-semibold">{regError}</p>
      }
      {
        regSuccess && <p className="text-green-600">{regSuccess}</p>
      }

    </div>
  )
}

export default Register