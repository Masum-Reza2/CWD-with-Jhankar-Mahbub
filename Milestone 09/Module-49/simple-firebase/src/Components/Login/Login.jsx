// documentation amar 100 tarar mala.

import { useState } from "react";
import app from "../../firebase/firebase.init";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const Login = () => {
    const [loggedUser, setLoggedUser] = useState(null)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setLoggedUser(user)
                console.log(user)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(email)
            })
    }

    const handleGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setLoggedUser(result.user)
            console.log(result.user)
        })
        .catch(error => console.log(error))
    }

    const handleLogOut = () => {
        signOut(auth)
            .then(result => {
                setLoggedUser(null)
                console.log(result, 'logOut done')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="h-screen flex items-center justify-center flex-col space-y-5">
            <div>
                {!loggedUser ?
                    <div>
                        <button onClick={handleGoogle} className="px-3 py-1 border shadow-md shadow-gray-600 active:translate-y-[0.10rem] hover:-translate-y-[0.10rem]">Google login</button>
                        <button onClick={handleGithub} className="px-3 py-1 border shadow-md shadow-gray-600 active:translate-y-[0.10rem] hover:-translate-y-[0.10rem]">GitHub login</button>
                    </div>
                    :
                    <button onClick={handleLogOut} className="px-3 py-1 border shadow-md shadow-gray-600 active:translate-y-[0.10rem] hover:-translate-y-[0.10rem]">logOut</button>
                }
            </div>
            {
                loggedUser && <div className="border p-5 shadow-md shadow-gray-500 rounded-md font-semibold space-y-1">
                    <p>Name : {loggedUser.displayName}</p>
                    <p>Email : {loggedUser.email}</p>
                    <img className="mx-auto" src={loggedUser.photoURL} />
                </div>
            }
        </div>
    )
}

export default Login