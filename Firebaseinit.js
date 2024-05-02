import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import { getFirestore, collection, getDocs } from '@firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyDr2OtR81_c-3yAOaIZB7fVubz2chv6vFY",
    authDomain: "buffetbank-58413.firebaseapp.com",
    projectId: "buffetbank-58413",
    storageBucket: "buffetbank-58413.appspot.com",
    messagingSenderId: "631414150673",
    appId: "1:631414150673:web:cfe848037bf5cf83ba83b0",
    measurementId: "G-DVS574M1B5"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);







