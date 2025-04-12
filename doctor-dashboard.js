function showSection(id, event) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.sidebar li').forEach(li => {
    li.classList.remove('active');
  });

  if (event) event.target.classList.add('active');
}

function logout() {
  alert("Logged out successfully.");
  window.location.href = "login.html";
}
