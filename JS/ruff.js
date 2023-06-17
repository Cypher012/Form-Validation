{
  list.addEventListener("blur", (e) => {
    if (e.target.id === "signUserName") {
      const nameInput = e.target.value;
    } else if (e.target.id === "signEmail") {
      const emailInput = e.target.value;
      console.log(emailInput);
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailError = document.querySelector("#email-error");
      const result = emailPattern.test(emailInput);
  
      if (emailInput === "") {
        emailError.style.display = "block";
        signEmail.style.borderColor = "red";
        signEmail.style.borderWidth = "2px";
        emailError.innerHTML = "Email address required";
        console.log(emailError.innerText);
      } else if (!result) {
        emailError.style.display = "block";
        signEmail.style.borderColor = "red";
        signEmail.style.borderWidth = "2px";
        emailError.innerHTML = "Invalid Email address";
        console.log(emailError.innerText);
      } else {
        emailError.style.display = "none";
        signEmail.style.borderColor = "initial";
        signEmail.style.borderColor = "green";
        signEmail.style.borderWidth = "2px";
  
        console.log(true);
      }
    } else if (e.target.id === "signPassword") {
      const passwordInput = e.target.value;
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]*)[A-Za-z\d!@#$%^&*()]{8,}$/;
      const passwordError = document.querySelector("#password-error");
      const result = passwordPattern.test(passwordInput);
  
      if (passwordInput === "") {
        passwordError.style.display = "block";
        passwordError.innerHTML = "Password Required";
        signPassword.style.borderColor = "red";
        signPassword.style.borderWidth = "2px";
        console.log(passwordError.innerText);
      } else if (!result) {
        passwordError.style.display = "block";
        passwordError.innerHTML =
          "Password must be at least 8 character long and contain at least one uppercase letter, lowercase letter and number";
        signPassword.style.borderColor = "red";
        signPassword.style.borderWidth = "2px";
      } else if (passwordInput.length > 12) {
        passwordError.style.display = "block";
        passwordError.innerHTML =
          "Password must be less than or equal to 12 characters";
        signPassword.style.borderColor = "red";
        signPassword.style.borderWidth = "2px";
      } else {
        passwordError.style.display = "block";
        passwordError.innerHTML =
          "Password must be at least 8 character long and contain at least one uppercase letter, lowercase letter and number";
        signPassword.style.borderColor = "red";
        signPassword.style.borderWidth = "2px";
      }
    }
  });
}
{
  /* if (passwordInput === "") {
    passwordError.style.display = "block";
    passwordError.innerHTML = "Password Required";
    signPassword.style.borderColor = "red";
    signPassword.style.borderWidth = "2px"; */
}
    // btnSignUp.innerText = 'You have been signed up'
/*  &
    checkboxValidationResult */