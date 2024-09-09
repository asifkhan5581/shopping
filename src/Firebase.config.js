
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADuvScBxOLWwxuP39_c2DWCJZ3XXsEJ6U",
  authDomain: "shoppingmal-e07e1.firebaseapp.com",
  projectId: "shoppingmal-e07e1",
  storageBucket: "shoppingmal-e07e1.appspot.com",
  messagingSenderId: "1095879497936",
  appId: "1:1095879497936:web:d918acf430c4367ecba6d5"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app