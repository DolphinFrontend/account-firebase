// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC99j79tCpPBu4S2qFuzbbg3WS-dSlQjm4",
  authDomain: "accaunt-firebase.firebaseapp.com",
  projectId: "accaunt-firebase",
  storageBucket: "accaunt-firebase.appspot.com",
  messagingSenderId: "863942632390",
  appId: "1:863942632390:web:2bcef3047b28ae573608c7"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app