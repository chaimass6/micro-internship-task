function generatePassword() {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

  let allowedChars = "";
  if (includeUppercase) allowedChars += uppercase;
  if (includeLowercase) allowedChars += lowercase;
  if (includeNumbers) allowedChars += numbers;
  if (includeSymbols) allowedChars += symbols;

  if (allowedChars === "") {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  document.getElementById("passwordResult").innerText = password;
}
function copyPassword() {
  const passwordText = document.getElementById("passwordResult").innerText;
  if (passwordText && passwordText !== "Your password will appear here") {
    navigator.clipboard.writeText(passwordText);
    alert("Password copied to clipboard!");
  } else {
    alert("Generate a password first!");
  }
}

