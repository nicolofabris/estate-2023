// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAgDBqIlLlezuaLMK_dRx9UEuB58Dbv5lc",
  authDomain: "realtor-56157.firebaseapp.com",
  projectId: "realtor-56157",
  storageBucket: "realtor-56157.appspot.com",
  messagingSenderId: "546879879826",
  appId: "1:546879879826:web:9f1f89a98d7fe5b000444b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()