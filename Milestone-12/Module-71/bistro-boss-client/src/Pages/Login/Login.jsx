import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useGlobal from '../../Hooks/useGlobal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';



const Login = () => {

    const [disableBtn, setDisableBtn] = useState(true);
    const { signInUser } = useGlobal();

    const navigate = useNavigate();
    const { state } = useLocation()

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result?.user;
                console.log(user)
                navigate(state || '/');
                window.location.reload();
                Swal.fire({
                    title: "Login successful.",
                    width: 600,
                    padding: "3em",
                    color: "#716add",
                    background: "#fff url(/images/trees.png)",
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                });
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    let captchaRef = useRef();
    const handleValidate = () => {
        const captchaValue = captchaRef.current.value;

        if (validateCaptcha(captchaValue) == true) {
            setDisableBtn(false);
            Swal.fire({
                title: "Verified",
                // text: "That thing is still around?",
                icon: "success"
            });
        }

        else {
            setDisableBtn(true);
            Swal.fire({
                title: "Failed. Try again",
                // text: "That thing is still around?",
                icon: "error"
            });
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro boss | Login</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/4">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            {/* >>>>>>>>>>>>>>>new things captcha<<<<<<<<<<<<< */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input name="captcha" ref={captchaRef} type="text" placeholder="Type the above captcha" className="input input-bordered" required />
                                <button onClick={handleValidate} type='button' className='btn btn-xs btn-outline mt-2 w-fit'>Validate</button>
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disableBtn} className={`btn btn-primary`} type="submit" value="Login" />
                            </div>
                            <p>New here? <Link className='text-blue-500' to={'/register'}>Create an account</Link></p>
                        </form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login