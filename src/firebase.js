// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1i_CMnMw0wpKTyzfKpmyvJaUw-1cFVhs",
  authDomain: "petstore-fire-2d998.firebaseapp.com",
  databaseURL: "https://petstore-fire-2d998-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "petstore-fire-2d998",
  storageBucket: "petstore-fire-2d998.firebasestorage.app",
  messagingSenderId: "437120903030",
  appId: "1:437120903030:web:96c45a79c2a374380ffc57",
  measurementId: "G-PJ4KR26Y6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = app.database();
export const productsRef = db.ref('products');