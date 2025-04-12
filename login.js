function showForm(role) {
  document.getElementById("patient-form").classList.add("hidden");
  document.getElementById("other-form").classList.add("hidden");

  if (role === "patient") {
    document.getElementById("patient-form").classList.remove("hidden");
  } else if (role === "doctor" || role === "admin") {
    document.getElementById("role-title").textContent = role.charAt(0).toUpperCase() + role.slice(1) + " Login";
    document.getElementById("other-form").classList.remove("hidden");
  }
}

function generatePatientId(event) {
  event.preventDefault();

  const fname = document.getElementById("fname").value.trim().toUpperCase();
  const lname = document.getElementById("lname").value.trim().toUpperCase();
  const dob = document.getElementById("dob").value.replaceAll("-", ""); // format YYYYMMDD

  if (fname.length < 3 || lname.length < 3 || !dob) {
    alert("Please fill out all fields properly.");
    return;
  }

  const uniqueId = `${fname.slice(0, 3)}${lname.slice(0, 3)}${dob}`;
  document.getElementById("generated-id").textContent = `Your Patient ID: ${uniqueId}`;
  alert("OTP verified! Logged in as Patient.");
}
