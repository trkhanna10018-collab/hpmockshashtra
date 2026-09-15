import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqHKXxQzFOEkp450RqG3vEktF9iQeCGiI",
  authDomain: "hpmockshashtra.firebaseapp.com",
  projectId: "hpmockshashtra",
  storageBucket: "hpmockshashtra.firebasestorage.app",
  messagingSenderId: "591547064527",
  appId: "1:591547064527:web:cc2edfa5f077dc30e717ba"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
