// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ3Sh4UMPj-PrvLYQWo_fCDvrYcDDdUso",
    authDomain: "email-password-auth-38906.firebaseapp.com",
    projectId: "email-password-auth-38906",
    storageBucket: "email-password-auth-38906.appspot.com",
    messagingSenderId: "926266053001",
    appId: "1:926266053001:web:2734918cbe123c2d0e5158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;