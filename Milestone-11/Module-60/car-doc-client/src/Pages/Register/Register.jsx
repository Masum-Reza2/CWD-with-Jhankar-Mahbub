import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import useGlobal from '../../Hooks/useGlobal';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';

const Register = () => {
    const navigate = useNavigate();
    const { createUser } = useGlobal();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        // craeting user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                // instead of browser alert use swal
                alert('Account created')
                // additional works can done there
                //  navigate lo login page / send user data to database / update user profile / show user a toast message... and so on.
                navigate('/login');
                signOut(auth);
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-24">
                <div className="text-center lg:text-left lg:w-1/3">
                    <img src={img} />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className='text-center font-bold text-3xl'>Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? please <Link className='text-orange-500 font-bold' to={'/login'}>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register