const passwordbox = document.getElementById("password");
const length = 12;
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowercase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "!@#$%^&*()_+{}|";

const AllChars = UpperCase + Lowercase + num + symbol;

function CreatePassword() {
  let password = "";
  password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
  password += Lowercase[Math.floor(Math.random() * Lowercase.length)];
  password += num[Math.floor(Math.random() * num.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += AllChars[Math.floor(Math.random() * AllChars.length)];
  }
  passwordbox.value = password;
}

function copyPassword() {
  passwordbox.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
