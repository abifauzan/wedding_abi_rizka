// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwIse2nyFE4i0_Z5yQqh7wm--RGQq8LNA",
  authDomain: "wedding-abi-ika.firebaseapp.com",
  projectId: "wedding-abi-ika",
  storageBucket: "wedding-abi-ika.appspot.com",
  messagingSenderId: "651915268904",
  appId: "1:651915268904:web:19e9b7bceb82fa7dd0f61d",
  measurementId: "G-EGTXW2KEWW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
