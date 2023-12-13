const passwordBox = document.getElementById("password");
const passwordLengthBox = document.getElementById("password-length");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$^&*()_+~|{}[]<>/-=+.,";
const allChars = upperCase + lowerCase + number + symbol;
function createPassword() {
  let password = "";
  const length = passwordLengthBox.value;

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  const copy = passwordBox.value;
  navigator.clipboard.writeText(copy);
}

passwordLengthBox.addEventListener("keydown", (e) => {
  const allowedKeys = ["ArrowLeft", "ArrowRight", "Backspace"];
  if(!allowedKeys.includes(e.key))
    e.preventDefault();
  let passwordLength = passwordLengthBox.value.length;
  if (!isNaN(e.key) && e.key !== "e" && e.key !== "E" && passwordLength <= 1) {
    passwordLengthBox.value += e.key;
  }
})