import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV1FNaJtgehsVV0lwDikz2VjQVnpfx17U",
  authDomain: "vue-fire-todo-f010d.firebaseapp.com",
  projectId: "vue-fire-todo-f010d",
  storageBucket: "vue-fire-todo-f010d.appspot.com",
  messagingSenderId: "939787604803",
  appId: "1:939787604803:web:f8d8cc95afe2b8c91a55f6"
};

// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();
// const app = initializeApp(firebaseConfig);