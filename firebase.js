// import{auth, db} from "../firebase-config.js";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

// import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"

// import { getDocs, getDoc, setDoc, doc, collection, addDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import { onAuthStateChanged,getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"

import { getFirestore, getDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"

const firebaseConfig = {
apiKey: "AIzaSyBJMRDtF28Uzcq6XO8Oz250NDh8Gtm06t4",
authDomain: "auth-94aef.firebaseapp.com",
projectId: "auth-94aef",
storageBucket: "auth-94aef.firebasestorage.app",
messagingSenderId: "76974069610",
appId: "1:76974069610:web:6b995b93a269490f54f713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Initialize Firestore
export const db = getFirestore(app);


