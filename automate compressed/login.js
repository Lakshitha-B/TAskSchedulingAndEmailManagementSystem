// Import Firebase config
import { auth, db } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// HR static credentials
const HR_CREDENTIALS = {
  username: "hadmin",
  password: "hr1234"
};

// Handle login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // ✅ Static login for HR
  if (username === HR_CREDENTIALS.username && password === HR_CREDENTIALS.password) {
    localStorage.setItem("userRole", "hr");
    window.location.href = "HR Dashboard/hr-dashboard.html";
    return;
  }

  // ✅ Firebase Auth for Mentor & Student
  try {
    const userCredential = await signInWithEmailAndPassword(auth, username, password);
    const uid = userCredential.user.uid;

    // 🔍 Get user role from Firestore
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const role = docSnap.data().role;
      localStorage.setItem("userRole", role);

      if (role === "mentor") {
        window.location.href = "Mentor Dashboard/mentor-dashboard.html";
      } else if (role === "student") {
        window.location.href = "Student Dashboard/student-dashboard.html";
      } else {
        alert("Unknown role in database.");
      }
    } else {
      alert("User record not found in Firestore.");
    }
  } catch (err) {
    alert("Login failed: " + err.message);
  }
});
