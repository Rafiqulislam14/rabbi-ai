function signup() {
  let u = newUser.value,
    p = newPass.value;
  localStorage.setItem("username", u);
  localStorage.setItem("password", p);
  alert("Account Created");
  window.location = "login.html";
}
function login() {
  let u = username.value,
    p = password.value;
  if (
    u === localStorage.getItem("username") &&
    p === localStorage.getItem("password")
  ) {
    localStorage.setItem("loggedUser", u);
    window.location = "chat.html";
  } else alert("Wrong Username or Password");
}
function toggleTheme() {
  document.body.classList.toggle("dark");
}
