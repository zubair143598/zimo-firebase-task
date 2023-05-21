import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxACvL9o9n6Ew2mz337HiD3eUOBl2ZMMc",
  authDomain: "zimo-firebase-task.firebaseapp.com",
  projectId: "zimo-firebase-task",
  storageBucket: "zimo-firebase-task.appspot.com",
  messagingSenderId: "165952676318",
  appId: "1:165952676318:web:9840ea97de6e95921efd4f",
  measurementId: "G-DP698VXMBD"
};


export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
export const db = getFirestore();