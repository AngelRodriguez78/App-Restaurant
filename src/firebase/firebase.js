import { getFirestore } from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5zjzPZj4FF4MjV6AGiJUHphiLcydiu9g",
  authDomain: "apprestaurant-ucamp.firebaseapp.com",
  projectId: "apprestaurant-ucamp",
  storageBucket: "apprestaurant-ucamp.appspot.com",
  messagingSenderId: "165050763610",
  appId: "1:165050763610:web:7f8a3351717d3645384b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}