// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh1xp1NXk6qv6yyTPHuZunIiPFtg3_7yA",
    authDomain: "auth-moha-milon-8b076.firebaseapp.com",
    projectId: "auth-moha-milon-8b076",
    storageBucket: "auth-moha-milon-8b076.appspot.com",
    messagingSenderId: "556004577629",
    appId: "1:556004577629:web:9cdd012bb71e76f42e58b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth