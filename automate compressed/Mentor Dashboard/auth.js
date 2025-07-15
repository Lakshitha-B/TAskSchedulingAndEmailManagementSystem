// auth.js

// Check if userRole exists in localStorage
const role = localStorage.getItem("userRole");

if (!role) {
  // Not logged in, redirect to login page
  window.location.href = "../login.html"; // Adjust path if needed
}
