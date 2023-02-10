// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAxNDjaQl1Ro4g7DVXPWTrOLsOZNt8Eaw",
    authDomain: "initialfirebase-cab23.firebaseapp.com",
    projectId: "initialfirebase-cab23",
    storageBucket: "initialfirebase-cab23.appspot.com",
    messagingSenderId: "998720832828",
    appId: "1:998720832828:web:84843b3ec38702c1ed8a39",
    measurementId: "G-7GL1ERWTNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;

// Initialize Firebase 
