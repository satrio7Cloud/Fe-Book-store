// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzrnGspdMAkOJkxhOexz492ITsVcXvHnE",
  authDomain: "books-store-inventory.firebaseapp.com",
  projectId: "books-store-inventory",
  storageBucket: "books-store-inventory.appspot.com",
  messagingSenderId: "619915298169",
  appId: "1:619915298169:web:15481abdd13e5eaae21ba8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
