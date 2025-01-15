import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD8u0YA3ivfTZnRdorC90Ia7rv_xgU1HuE",
  authDomain: "tutor-abhi.firebaseapp.com",
  projectId: "tutor-abhi",
  storageBucket: "tutor-abhi.appspot.com",
  messagingSenderId: "679841319306",
  appId: "1:679841319306:web:59a2d33c151070cb9d2073",
  measurementId: "G-BPCVY6R44J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Auth provider
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };