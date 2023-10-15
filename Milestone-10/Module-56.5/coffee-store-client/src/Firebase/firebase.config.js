// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKHVwqrOv8QkDjxBj_TRy7gQOPRlOx5NE",
    authDomain: "coffeemaster-2f7b4.firebaseapp.com",
    projectId: "coffeemaster-2f7b4",
    storageBucket: "coffeemaster-2f7b4.appspot.com",
    messagingSenderId: "324846632609",
    appId: "1:324846632609:web:be4c6b6c3f80ef0d4afae0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;