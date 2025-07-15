// schedule-meeting.js
import { db } from "../firebase-config.js";
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const team = document.getElementById("teamSelect").value;
  const date = document.getElementById("meetingDate").value;
  const time = document.getElementById("meetingTime").value;
  const link = document.getElementById("meetLink").value;

  try {
    await addDoc(collection(db, "meetings"), {
      team,
      date,
      time,
      link,
      createdAt: Timestamp.now()
    });

    alert("Meeting Scheduled Successfully!");
  } catch (err) {
    alert("Error scheduling meeting: " + err.message);
  }
});
