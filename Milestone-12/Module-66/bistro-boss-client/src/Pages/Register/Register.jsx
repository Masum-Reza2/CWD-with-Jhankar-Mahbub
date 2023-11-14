
//  introducing new npm package react hook form
import { Helmet } from "react-helmet"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import useGlobal from "../../Hooks/useGlobal"
import Swal from "sweetalert2"

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { createUser, logOutUser, profileUpdate } = useGlobal()
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result?.user;
                console.log(user)

                profileUpdate(data.name, data.photo)
                    .then(() => {
                        navigate('/login');
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Account created successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    .catch(error => console.log(error))

                logOutUser();
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    // const handleRegister = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name, email, password);
    // }

    return (
        <>
            <Helmet>
                <title>Bistro boss | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/4">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Name" className="input input-bordered"  {...register("name", { required: true })} />
                                {errors.name && <span className="text-red-500">This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input name="photo" type="text" placeholder="Name" className="input input-bordered"  {...register("photo", { required: true })} />
                                {errors.photo?.type === 'required' && <span className="text-red-500">Photo url is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered"  {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">Email field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="text" placeholder="password" className="input input-bordered"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
                                    })} />
                                {errors.password?.type === 'minLength' && <p className="text-red-700 font-bold">short password</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-700 font-bold">At least one upper case,one lower case, one digit, one special character</p>}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>Already have an account? <Link className="text-blue-600" to={'/login'}>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Register