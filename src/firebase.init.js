// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBW7bOasKz8CCmDhOBDuP5FMVFJrLa_Bms",
    authDomain: "digital-eye-e88cf.firebaseapp.com",
    projectId: "digital-eye-e88cf",
    storageBucket: "digital-eye-e88cf.appspot.com",
    messagingSenderId: "1077929306967",
    appId: "1:1077929306967:web:fdcafef669bae00ef2ec12"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth