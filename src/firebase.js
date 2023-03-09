// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3lBQkIEQQifJQV5thccOdM_r4jf0OXvo",
  authDomain: "personal-project-abbfe.firebaseapp.com",
  projectId: "personal-project-abbfe",
  storageBucket: "personal-project-abbfe.appspot.com",
  messagingSenderId: "65050376002",
  appId: "1:65050376002:web:ea1b84866ccff9ede07adb",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
