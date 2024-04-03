// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlB0OzUs2nOUYkoaxVufpckTVH-jJhrCI",
    authDomain: "leetcode-e0fc1.firebaseapp.com",
    databaseURL: "https://leetcode-e0fc1-default-rtdb.firebaseio.com",
    projectId: "leetcode-e0fc1",
    storageBucket: "leetcode-e0fc1.appspot.com",
    messagingSenderId: "112897231153",
    appId: "1:112897231153:web:174090932f623925a04810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);