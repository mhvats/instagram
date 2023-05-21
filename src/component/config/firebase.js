import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDkwa6UeBVI1GB-gK1IoRorr4Eay5yLqUc",
  authDomain: "instagram-55431.firebaseapp.com",
  projectId: "instagram-55431",
  storageBucket: "instagram-55431.appspot.com",
  messagingSenderId: "485480170475",
  appId: "1:485480170475:web:b30c61e412667be5388fae",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
