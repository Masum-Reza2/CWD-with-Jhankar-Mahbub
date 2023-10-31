import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import useGlobal from '../../Hooks/useGlobal';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = useGlobal();
    const { state } = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // logging in user
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                alert('login successfull');
                // navigate(state || '/');

                // >>>>>>>>| axios + JWT |<<<<<<<<<<
                const jwtUser = { email };
                axios.post('http://localhost:5000/jwt', jwtUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(state || '/');
                        }
                    })
                    .catch(error => console.log(error.message))
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
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className='text-center font-bold text-3xl'>Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <p>Don't have an account? please <Link className='text-orange-500 font-bold' to={'/register'}>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login