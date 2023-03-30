import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtVrq9aRRsc-1MtXCi8sErralOtR1nXiw",
    authDomain: "i-stadying.firebaseapp.com",
    databaseURL: "https://i-stadying.firebaseio.com",
    projectId: "i-stadying",
    storageBucket: "i-stadying.appspot.com",
    messagingSenderId: "626952951670",
    appId: "1:626952951670:web:24328d7621615769ea0c57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);