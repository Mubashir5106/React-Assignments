import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCF0U-vF5bESCxGa8mqIVznhYNTFcJaiG8",
    authDomain: "react-todo-app-edc8c.firebaseapp.com",
    projectId: "react-todo-app-edc8c",
    storageBucket: "react-todo-app-edc8c.appspot.com",
    messagingSenderId: "179071624058",
    appId: "1:179071624058:web:3cf7afa0ec820d64a3acc3",
    measurementId: "G-93WEJ2SSJX"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };