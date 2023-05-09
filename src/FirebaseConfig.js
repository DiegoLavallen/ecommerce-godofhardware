import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaXO0Pp-z3G3d7uLynLn_ZwRJ9aDTXG0Q",
  authDomain: "god-of-hardware-ecommerce.firebaseapp.com",
  projectId: "god-of-hardware-ecommerce",
  storageBucket: "god-of-hardware-ecommerce.appspot.com",
  messagingSenderId: "1094358463046",
  appId: "1:1094358463046:web:45fda11f72dc50ed389047",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
