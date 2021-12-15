// const { body } = require("express-validator");

const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const loginButton = document.querySelector("#loginButton");
const signupButton = document.querySelector("#signupButton");
const logoutButton = document.querySelector("#logoutButton");

document.body.addEventListener("click", closeLogin);
document.body.addEventListener("click", closeSignup);

function closeLogin() {
  login.classList.remove("open");
  document.body.classList.remove("blur")
}

function closeSignup() {
  signup.classList.remove("open");
}

loginButton.addEventListener("click", (e) => {
  closeSignup();
  e.stopPropagation();
  login.classList.add("open");
  document.body.classList.add("blur")
});

login.addEventListener("click", (e) => {
  closeSignup();
  e.stopPropagation();
});

signupButton.addEventListener("click", (e) => {
  closeLogin();
  e.stopPropagation();
  signup.classList.add("open");
});

signup.addEventListener("click", (e) => {
  closeLogin();
  e.stopPropagation();
});
