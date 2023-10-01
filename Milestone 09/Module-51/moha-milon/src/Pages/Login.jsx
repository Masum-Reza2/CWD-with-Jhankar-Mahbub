import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthProvider";

const Login = () => {
  const navigate = useNavigate()

  const { logInUser } = useContext(AuthContext)


  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    // loggin in user from context API func
    logInUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        e.target.reset()
        navigate('/')
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:w-1/4">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" required placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6 space-y-5">
                <button type="submit" className="btn btn-primary">Login</button>
                <strong>Do not have an account? please <Link className="px-3 py-1 border text-sm shadow-md rounded-md" to={'/register'}>Register</Link></strong>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login