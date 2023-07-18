import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyDraWiGB4BMP6gfioXZN9jOYUtQNJdBM10",
  authDomain: "miniblog-17362.firebaseapp.com",
  projectId: "miniblog-17362",
  storageBucket: "miniblog-17362.appspot.com",
  messagingSenderId: "683003237061",
  appId: "1:683003237061:web:23bd1003e30293f4e496ac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };