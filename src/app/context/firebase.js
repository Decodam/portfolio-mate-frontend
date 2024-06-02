// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyChC_XbG089VCo_q-sHjvtOKBKzhwJVMc8",
  authDomain: "portfolio-mate-profile.firebaseapp.com",
  projectId: "portfolio-mate-profile",
  storageBucket: "portfolio-mate-profile.appspot.com",
  messagingSenderId: "528399848288",
  appId: "1:528399848288:web:202c36edb04f7def544405",
  measurementId: "G-L0XHKEBQE3"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}