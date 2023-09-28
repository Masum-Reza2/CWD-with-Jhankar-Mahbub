// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwGfBswAfFgtAmsFad1WydHtPfgQ0Xr_8",
    authDomain: "simple-firebase-3e715.firebaseapp.com",
    projectId: "simple-firebase-3e715",
    storageBucket: "simple-firebase-3e715.appspot.com",
    messagingSenderId: "303618407809",
    appId: "1:303618407809:web:cf9fe29f12547502effc80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app