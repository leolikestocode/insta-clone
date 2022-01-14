// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfETZsjZKCPXJ1rYPVHLoat54ISXCjM7U",
  authDomain: "insta-clone-fc116.firebaseapp.com",
  projectId: "insta-clone-fc116",
  storageBucket: "insta-clone-fc116.appspot.com",
  messagingSenderId: "470699139240",
  appId: "1:470699139240:web:bf80f0d2daea3fc326a29d",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
