import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../ContextProvider/AuthProvider";

const Register = () => {
  const { user, createUser } = useContext(AuthContext)
  // console.log(user, createUser)
  const navigate = useNavigate()

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password)

    // calling create user func from context API
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate('/login')
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      })
  }

  return (
    <div className="text-center">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-1/4">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" required placeholder="Your name" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" required placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" required placeholder="Password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6 space-y-5">
                  <button type="submit" className="btn btn-primary">Register</button>
                  <strong>Already have an account? please <Link className="px-3 py-1 border shadow-md rounded-md" to={'/login'}>Login</Link></strong>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Register