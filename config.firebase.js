// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUwliUcO_08jZM4NQcdNSdmjh2pnlM8HM",
  authDomain: "car-shop-client.firebaseapp.com",
  projectId: "car-shop-client",
  storageBucket: "car-shop-client.appspot.com",
  messagingSenderId: "373127409381",
  appId: "1:373127409381:web:ca209ba2390ac051b26e0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export default app;

 // apiKey:import.meta.env.VITE_apiKey,
  // authDomain:import.meta.env.VITE_authDomain ,
  // projectId: import.meta.env.VITE_projectId ,
  // storageBucket:import.meta.env.VITE_messagingSenderId ,
  // messagingSenderId:import.meta.env.VITE_appId ,
  // appId:import.meta.env.VITE_appId 