
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRk16rG4uV5C1ugwsuxP-g3qNKxmOUtso",
  authDomain: "leave-app-7ae4f.firebaseapp.com",
  projectId: "leave-app-7ae4f",
  storageBucket: "leave-app-7ae4f.appspot.com",
  messagingSenderId: "289656574724",
  appId: "1:289656574724:web:ce5723e4f1040e172a7651",
  measurementId: "G-7JP5Z35SRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const FireDb = getFirestore
export {FireDb}