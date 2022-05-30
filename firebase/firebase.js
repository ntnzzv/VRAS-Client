// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "vras-45589.firebaseapp.com",
  projectId: "vras-45589",
  storageBucket: "vras-45589.appspot.com",
  messagingSenderId: "282288210937",
  appId: "1:282288210937:web:123a8155393edbe88df328",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
