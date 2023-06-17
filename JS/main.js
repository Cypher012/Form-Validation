const btnHome = document.querySelector("#btn-home");
const logIn = document.querySelector("#logIn");
const signUp = document.querySelector("#signUp");
const formSignUp = document.querySelector("#form-signUp");
const formLogIn = document.querySelector("#form-logIn");
const dismissBtn = document.getElementsByClassName("dismissBtn");
const signEmail = document.querySelector("#signEmail");
const signUserName = document.querySelector("#signName");
const signPassword = document.querySelector("#signPassword");
const btnLogIn = document.querySelector("#btnLogIn");
const btnSignUp = document.querySelector("#btnSignUp");
const signUpCheckbox = document.querySelector("#terms");
const inputField = document.querySelectorAll("input");
let emailError = document.querySelector("#email-error");
let passwordError = document.querySelector("#password-error");
let nameError = document.querySelector("#name-error");
let checkBoxError = document.querySelector("#checkboxError");
let nameInput;
let nameValidationResult;
let emailValidationResult;
let passwordValidationResult;
let checkboxValidationResult;

window.addEventListener("load", () => {
  document.forms["form-menu1"].reset();
  document.forms["form-menu2"].reset();
});

btnHome.addEventListener("click", () => {
  logIn.style.display = "block";
});

formSignUp.addEventListener("click", () => {
  logIn.style.display = "none";
  signUp.style.display = "block";
  document.forms["form-menu1"].reset();
  document.forms["form-menu2"].reset();
});

formLogIn.addEventListener("click", () => {
  logIn.style.display = "block";
  signUp.style.display = "none";
  document.forms["form-menu1"].reset();
  document.forms["form-menu2"].reset();
});

Array.from(dismissBtn).forEach((btn) => {
  btn.addEventListener("click", () => {
    signUp.style.display = "none";
    logIn.style.display = "none";
    document.forms["form-menu1"].reset();
    document.forms["form-menu2"].reset();
    inputField.forEach((input) => {
      input.style.borderColor = "initial";
      input.style.borderWidth = "1px";
    });
  });
});

const list = document.querySelector("#form-menu2 ul");

list.addEventListener("focusin", (e) => {
  if (
    e.target.id === "signEmail" ||
    e.target.id === "signPassword" ||
    e.target.id === "signUserName"
  ) {
    e.target.style.borderColor = "initial";
    e.target.style.borderWidth = "1px";
  }
});

signEmail.addEventListener("input", () => {
  const emailInput = signEmail.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailValidationResult = emailPattern.test(emailInput);
  if (emailInput === "" || emailValidationResult) {
    signEmail.style.borderColor = "#c8c2c2";
    signEmail.style.borderWidth = "1px";
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    signEmail.style.borderColor = "red";
    signEmail.style.borderWidth = "2px";
    emailError.innerHTML = "Invalid Email address";
  }
});

signUserName.addEventListener("input", () => {
 nameInput = signUserName.value;
  nameValidationResult = nameInput !== "";

  if (nameInput === "" || nameValidationResult) {
    nameError.style.display = "none";
    signUserName.style.borderColor = "#c8c2c2";
    signUserName.style.borderWidth = "1px";
  }
});

signPassword.addEventListener("input", () => {
  const passwordInput = signPassword.value;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]*)[A-Za-z\d!@#$%^&*()]{8,}$/;
  passwordValidationResult = passwordPattern.test(passwordInput) || passwordInput.length > 12;

  if (passwordInput === "" || passwordValidationResult) {
    passwordError.style.display = "none";
    signPassword.style.borderColor = "#c8c2c2";
    signPassword.style.borderWidth = "1px";
  } else {
    passwordError.style.display = "block";
    passwordError.innerHTML =
      "Password must be at least 8 character long and contain at least one uppercase letter, lowercase letter and number";
    signPassword.style.borderColor = "red";
    signPassword.style.borderWidth = "2px";
  }
});

signUpCheckbox.addEventListener("change", (e) => {
  if (e.target.checked === true) {
    checkboxValidationResult = true;
  } else {
    checkboxValidationResult = false;
  }
});

btnSignUp.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    nameValidationResult &&
    emailValidationResult &&
    passwordValidationResult &&
    checkboxValidationResult
  ) {
    setTimeout(() => {
      window.location.href = "./ruff.html";
    }, 3000);
  }

  if (!checkboxValidationResult) {
    checkBoxError.style.display = "block";
    checkBoxError.innerText = "Agree to terms and privacy"
  }
  else {
    checkBoxError.style.display = "none"
  }
  if (!nameValidationResult) {
    nameError.style.display = "block";
    nameError.innerText = "Please enter your name"
  }
  else {
    nameError.style.display = "none"
  }
  if (!emailValidationResult) {
    emailError.style.display = "block";
    emailError.innerText = "Please enter your email address"
  }
  else {
    emailError.style.display = "none"
  }
  if (!passwordValidationResult) {
    passwordError.style.display = "block";
    passwordError.innerText = "Please enter your password"
  }
});
