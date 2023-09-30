import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillAlert } from "react-icons/ai";

const Login = () => {
  const [success, setsuccess] = useState('')
  const [loginError, setLoginError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setsuccess('')
    setLoginError('')


    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    // add validations here if you want.


    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        if (user.emailVerified) {
          return setsuccess('Login successful')
        }
        else {
          return alert('Please verify your Email')
        }
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(errorMessage)
        console.log(errorMessage, errorCode)
      })

  }

  // forget password
  const emailRef = useRef();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    console.log(email)

    if (!emailRegex.test(email)) {
      alert('please provide a valid email')
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(result => {
        console.log('please check your email')
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-1/4">
            <h1 className="text-5xl font-bold">Login Now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                  <label className="label">
                    <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
              {
                success && <h1 className="text-2xl text-green-600">{success}</h1>
              }
              {
                loginError && <h1 className="text-red-500 text-2xl">{loginError}</h1>
              }

              <p>Brand new user? Please <Link className="border px-3 py-1 shadow-md shadow-gray-400 rounded-sm " to={'/register'}>Register</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login