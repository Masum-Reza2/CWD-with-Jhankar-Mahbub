/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase.config";
import axios from "axios";

// create a context and export it
export const GlobalContext = createContext();

// receive children and provide it.
const ControlRoom = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user creation, login, register, logout, observer etc here

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // observe a user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(`Current user is`, currentUser)
            setLoading(false);

            // Generating token from a central place setting cookie by server
            const jwtUser = { email: currentUser?.email || user?.email };

            if (currentUser) {
                axios.post('https://car-doctor-server-2q5x4k0ma-masum-rezas-projects.vercel.app/jwt', jwtUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        // if (res.data.success) {
                        //     navigate(state || '/');
                        // }
                    })
                    .catch(error => console.log(error.message))
            }
            else {
                axios.post('https://car-doctor-server-2q5x4k0ma-masum-rezas-projects.vercel.app/logout', jwtUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => console.log(error.message))
            }

        });
        return () => {
            return unsubscribe()
        }
    }, [])

    // create value and share it
    const globalInfo = {
        user,
        loading,
        createUser,
        loginUser,
    }
    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ControlRoom