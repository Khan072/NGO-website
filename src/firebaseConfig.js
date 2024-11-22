import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBaTcva6lem1sG9D97NxhgyZmmtVxkXEUc",
    authDomain: "riseup-community-foundation.firebaseapp.com",
    projectId: "riseup-community-foundation",
    storageBucket: "riseup-community-foundation.appspot.com",
    messagingSenderId: "753917522577",
    appId: "1:753917522577:web:2cac515fb2c129389c0530",
    measurementId: "G-PZHYC1YW9P"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

