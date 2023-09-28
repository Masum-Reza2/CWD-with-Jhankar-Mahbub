import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBnmeW16LR0gVyCYfkXx4PO-ub_nbthZD8",
    authDomain: "timple-demo.firebaseapp.com",
    projectId: "timple-demo",
    storageBucket: "timple-demo.appspot.com",
    messagingSenderId: "598439187317",
    appId: "1:598439187317:web:b29e46a04121ef9804793c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;