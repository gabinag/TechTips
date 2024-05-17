import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVSTPrh_an39bdMm2ISQVBhyxD8GvtLVw",
  authDomain: "dailytech-708b7.firebaseapp.com",
  projectId: "dailytech-708b7",
  storageBucket: "dailytech-708b7.appspot.com",
  messagingSenderId: "157108546764",
  appId: "1:157108546764:web:4c818e79926cb63cf32669"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
const auth = getAuth(app);
 
export { db, auth };