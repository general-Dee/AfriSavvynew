import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmfykuFKi1d62VsmycBej8bsA3-kn5IVs",
    authDomain: "damau-milk-farm.firebaseapp.com",
    projectId: "damau-milk-farm",
    storageBucket: "damau-milk-farm.appspot.com",
    messagingSenderId: "982183124149",
    appId: "1:982183124149:web:21e24825e8544ec02b72fc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore()

export const storage = getStorage(app)

export const auth = getAuth();