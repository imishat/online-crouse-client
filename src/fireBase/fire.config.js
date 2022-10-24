// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtqR01FckS7-Q4R2asPaIDbMVRRL8KA4c",
  authDomain: "e-course-be532.firebaseapp.com",
  projectId: "e-course-be532",
  storageBucket: "e-course-be532.appspot.com",
  messagingSenderId: "171721550257",
  appId: "1:171721550257:web:2c3f722ec21804f98c7590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app