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

const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "ExchangeRate"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
};

fetchData();

//const exchangeRateDocRef = firestore.collection('ExchangeRate').doc('ExchangeRate');
//console.log(exchangeRateDocRef);



// 獲取指向 "ExchangeRate" 文檔的參考
//const exchangeRateDocRef = firestore().collection('ExchangeRate').doc('ExchangeRate');

// 從 Firestore 中獲取該文檔的數據



