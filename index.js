//DOM elements

const passwordLengthValueIndicator = document.getElementById(
  "password-length-value"
);
const passwordLengthSetter = document.getElementById("password-length");
const hasLowerCaseChar = document.getElementById("hasLowerCaseChar");
const hasUpperCaseChar = document.getElementById("hasUpperCaseChar");
const hasNumbers = document.getElementById("hasNumbers");
const hasSpecialChar = document.getElementById("hasSpecialChar");
const generateBtn = document.getElementById("generate-password");
const passwordContainer = document.getElementById("password-container");
const copyPasswordBtn = document.getElementById("copy-password");

// variables
let alphaCharactersStr = "abcdefghijklmnopqrstuvwxyz";
const specialChars = ["@", "!", "#", "$", "%", "&", "*"];
const upperCaseChars = [...alphaCharactersStr.toUpperCase().split("")];
const lowerCaseChars = [...alphaCharactersStr.split("")];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

passwordLengthValueIndicator.innerText = passwordLengthSetter.value;
passwordLengthSetter.addEventListener("change", (e) => {
  passwordLengthValueIndicator.innerText = e.target.value;
});

generateBtn.addEventListener("click", () => {
  passwordContainer.innerText = generatePassWord(
    passwordLengthSetter.value,
    hasUpperCaseChar.checked,
    hasLowerCaseChar.checked,
    hasSpecialChar.checked,
    hasNumbers.checked
  );
});

copyPasswordBtn.addEventListener("click", () => {
  copyToClipBoard(passwordContainer);
});

const copyToClipBoard = (source) => {
  if (source.textContent.length) {
    navigator.clipboard.writeText(source.textContent);
    /* Alert the copied text */
    alert("password copied!");
  } else {
    alert("generate password first!");
  }
};

const generatePassWord = (
  length,
  hasUpperCase,
  hasLowerCase,
  hasSpecialCharacters,
  hasNumbers
) => {
  let password = "";
  if (length >= 6) {
    let choosenCharacters = [
      ...(hasUpperCase ? upperCaseChars : []),
      ...(hasLowerCase ? lowerCaseChars : []),
      ...(hasSpecialCharacters ? specialChars : []),
      ...(hasNumbers ? numbers : []),
    ];
    if (choosenCharacters.length) {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(
          Math.random() * choosenCharacters.length
        );
        password += choosenCharacters[randomIndex];
      }
    } else {
      alert("Please select at least one set of characters!");
    }
  } else {
    alert("minmum password length is 6!");
  }
  return password;
};
