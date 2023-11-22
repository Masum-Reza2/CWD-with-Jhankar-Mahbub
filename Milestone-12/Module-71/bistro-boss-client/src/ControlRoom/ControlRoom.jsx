/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const GlobalContext = createContext();

const ControlRoom = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const publicAxios = useAxiosPublic();

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('current user is', currentUser);
            if (currentUser) {
                const jwtUser = { email: currentUser?.email }
                publicAxios.post('/jwt', jwtUser)
                    .then(res => {
                        if (res.data.token) {
                            console.log('***********token', res.data.token)
                            localStorage.setItem('token', res?.data?.token);
                            setLoading(false);
                        }
                    })
            } else {
                localStorage.removeItem('token');
                setLoading(false);
            }
        })
        return () => {
            return unsubscribe();
        }
    }, [publicAxios, user])

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signin user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut user
    const logOutUser = () => {
        return signOut(auth);
    }

    // profileUpdate
    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    //  google login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const globalInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOutUser,
        profileUpdate,
        googleLogin,
    }

    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ControlRoom