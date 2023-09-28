import { useState } from "react";
import app from "../../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [loggedUser, setLoggedUser] = useState(null)
    let { displayName, email, photoURL } = loggedUser || {}

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gihubProvider = new GithubAuthProvider();

    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoggedUser(user)

                toast.success('Login Successful!', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithub = () => {
        signInWithPopup(auth, gihubProvider)
            .then(result => {
                const user = result.user;
                setLoggedUser(user)
                toast.success('Login Successful!', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                setLoggedUser(null)
                console.log(result, 'logged out')
                toast.info('Log out Successful!', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="text-center flex items-center justify-center flex-col gap-10 ">
            <div>
                {!loggedUser ?
                    <div className=" space-x-3">
                        <button onClick={handleGoogle} className="border px-3 py-1 shadow-md shadow-gray-600 hover:-translate-y-[0.10rem] active:translate-y-[0.10rem] rounded-md">Google Sign in</button>
                        <button onClick={handleGithub} className="border px-3 py-1 shadow-md shadow-gray-600 hover:-translate-y-[0.10rem] active:translate-y-[0.10rem] rounded-md">GitHub Sign in</button>
                    </div>
                    :
                    <button onClick={handleSignOut} className="border px-3 py-1 shadow-md shadow-gray-600 hover:-translate-y-[0.10rem] active:translate-y-[0.10rem] rounded-md">Sign Out</button>
                }
            </div>
            {
                loggedUser && <div className="flex flex-col items-center justify-center border shadow-md shadow-gray-600 p-5 rounded-md space-y-1">
                    <img className="rounded-full" src={photoURL} alt="" />
                    <p className="font-bold">{displayName || 'Not found'}</p>
                    <p><span className="underline">Email</span> : {email || 'Not found'}</p>
                </div>
            }
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}

export default Login