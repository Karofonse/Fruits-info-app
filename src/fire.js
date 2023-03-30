// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDtVrq9aRRsc-1MtXCi8sErralOtR1nXiw",
//     authDomain: "i-stadying.firebaseapp.com",
//     databaseURL: "https://i-stadying.firebaseio.com",
//     projectId: "i-stadying",
//     storageBucket: "i-stadying.appspot.com",
//     messagingSenderId: "626952951670",
//     appId: "1:626952951670:web:24328d7621615769ea0c57"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// // test Fruit App

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);