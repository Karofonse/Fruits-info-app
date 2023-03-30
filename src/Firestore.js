import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5KKXyLqPoQHn214T26yJ0sn5by0NE_2c",
    authDomain: "testssfruitapp.firebaseapp.com",
    projectId: "testssfruitapp",
    storageBucket: "testssfruitapp.appspot.com",
    messagingSenderId: "455875359265",
    appId: "1:455875359265:web:37f6165904fcdc7f3f6960",
    measurementId: "G-QJM0SR4EH1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);