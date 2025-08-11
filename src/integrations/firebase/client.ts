// src/integrations/firebase/client.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT_LyovaWki6l_0XFvXFo6fpbkHTM266Q",
  authDomain: "petcare-app-2025.firebaseapp.com",
  projectId: "petcare-app-2025",
  storageBucket: "petcare-app-2025.firebasestorage.app",
  messagingSenderId: "377633812164",
  appId: "1:377633812164:web:2e28b830439c5bda45a391",
  measurementId: "G-TJ3J7LYBEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);