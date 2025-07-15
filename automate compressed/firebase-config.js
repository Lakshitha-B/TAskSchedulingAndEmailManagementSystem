import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAw-zxBhbuKw9nwCHaMNxwAhJgNluVeBIs",
  authDomain: "myapp-46bf1.firebaseapp.com",
  projectId: "myapp-46bf1",
  storageBucket: "myapp-46bf1.appspot.com",
  messagingSenderId: "449749067491",
  appId: "1:449749067491:web:e6e9ee4189a00fd82f87d6",
  measurementId: "G-S8BZF1W7DM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
