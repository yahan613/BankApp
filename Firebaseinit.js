import { initializeApp, getApps, } from '@firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence, RecaptchaVerifier, signInWithPhoneNumber  } from '@firebase/auth';
import { getFirestore, collection, getDocs } from '@firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';



const firebaseConfig = {
    apiKey: "AIzaSyDr2OtR81_c-3yAOaIZB7fVubz2chv6vFY",
    authDomain: "buffetbank-58413.firebaseapp.com",
    projectId: "buffetbank-58413",
    storageBucket: "buffetbank-58413.appspot.com",
    messagingSenderId: "631414150673",
    appId: "1:631414150673:web:cfe848037bf5cf83ba83b0",
    measurementId: "G-DVS574M1B5"
};
const app_length = getApps().length > 0;

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = app_length ? getAuth(app) :
    initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage)
});


// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();



  











