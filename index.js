const nameEl = document.getElementById("name");
const surnameEl = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("pw");
const button = document.querySelector("#subButton");
const imgName = document.querySelector(".error-img1");
const imgSurname = document.querySelector(".error-img2");
const imgEmail = document.querySelector(".error-img3");
const imgPw = document.querySelector(".error-img4");
const nameErrText = document.querySelector(".name-text");
const surnameErrText = document.querySelector(".surname-text");
const emailErrText = document.querySelector(".email-text");
const pwErrText = document.querySelector(".password-text");

// const regExName = /^[w'-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[]]{2,}$/;
const regExEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

button.addEventListener("click", function () {
  checkName();
  checkEmail();
  checkPassword();
});

function checkName() {
  if (nameEl.value == "" || nameEl.value == undefined) {
    nameEl.style.border = "2px solid var(--red)";
    imgName.style.visibility = "visible";
    nameErrText.innerHTML = "First Name cannot be empty";
  } else {
    imgName.style.visibility = "hidden";
    nameEl.style.border = "1px solid var(--grayish_blue)";
    nameErrText.innerHTML = "";
  }

  if (surnameEl.value == "" || surnameEl.value == undefined) {
    surnameEl.style.border = "2px solid var(--red)";
    imgSurname.style.visibility = "visible";
    surnameErrText.innerHTML = "Last Name cannot be empty";
  } else {
    imgSurname.style.visibility = "hidden";
    surnameEl.style.border = "1px solid var(--grayish_blue)";
    surnameErrText.innerHTML = "";
  }
}

function checkEmail() {
  if (!regExEmail.test(email.value)) {
    email.style.border = "2px solid var(--red)";
    imgEmail.style.visibility = "visible";
    emailErrText.innerHTML = "Looks like this is not an email.";
  } else {
    email.style.border = "1px solid var(--grayish_blue)";
    imgEmail.style.visibility = "hidden";
    emailErrText.innerHTML = "";
  }
}

function checkPassword() {
  if (password.value == "" || password.value == undefined) {
    password.style.border = "2px solid var(--red)";
    imgPw.style.visibility = "visible";
    pwErrText.innerHTML = "Password cannot be empty";
  } else {
    imgPw.style.visibility = "hidden";
    password.style.border = "1px solid var(--grayish_blue)";
    pwErrText.innerHTML = "";
  }
}
