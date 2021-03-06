const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const loginButton = document.querySelector("#loginButton");
const signupButton = document.querySelector("#signupButton");
const logoutButton = document.querySelector("#logoutButton");

document.body.addEventListener("click", closeLogin, false);
document.body.addEventListener("click", closeSignup, false);

function closeLogin() {
  login.classList.remove("open");
  document.body.classList.remove("blur")
}

function closeSignup() {
  signup.classList.remove("open");
}

if (loginButton) {
  loginButton.addEventListener("click", (e) => {
    closeSignup();
    e.stopPropagation();
    login.classList.add("open");
    document.body.classList.add("blur")
  });
}


login.addEventListener("click", (e) => {
  closeSignup();
  e.stopPropagation();
});

if (signupButton) {
  signupButton.addEventListener("click", (e) => {
    closeLogin();
    e.stopPropagation();
    signup.classList.add("open");
    document.body.classList.add("blur")
  });
}

signup.addEventListener("click", (e) => {
  closeLogin();
  e.stopPropagation();
});


if (location.pathname == '/users/login') {
  login.classList.add("open");
}
