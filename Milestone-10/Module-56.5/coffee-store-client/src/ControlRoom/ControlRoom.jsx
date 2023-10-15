import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react"
import auth from "../Firebase/firebase.config";

export const GlobalContext = createContext(null);

const ControlRoom = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    // createUser
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signInUser
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const globalInfo = {
        user,
        loading,
        createUser,
        signInUser
    }
    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ControlRoom