// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMuHYLTZ5im1vSMWjaseJWuZmE-tgq0LA",
  authDomain: "adonde-app.firebaseapp.com",
  projectId: "adonde-app",
  storageBucket: "adonde-app.appspot.com",
  messagingSenderId: "856042748200",
  appId: "1:856042748200:web:01350a4cac792a7024f81d",
  measurementId: "G-N6Q6580WSM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };
