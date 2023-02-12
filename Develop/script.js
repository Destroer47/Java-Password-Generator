let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let charLow = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let specialChar = '!"#$%&()*+,-./:;<=>?@[]^_`}{|~';
let userPassLengthInput;
let upCase = document.getElementById('uppercase');
let lowCase = document.getElementById('lowercase');
let numCase = document.getElementById('numbers');
let specialCase = document.getElementById('special-char');
let passChar = [];
let charType
let char2
let char3
let password = "";

function random(max) {
  return Math.floor(Math.random()* max);
}

function selectPassword() {
  if(!upCase.checked && !lowCase.checked && !numCase.checked && !specialCase.checked) {
    alert('You must check at least one checkbox');
    return;
  }

  else {
    password = "";
    passGen();
  }
}

function passGen() {
  if(upCase.checked) {
    passChar.push(characters);
  }

  if(lowCase.checked) {
    passChar.push(charLow);
  }

  if(numCase.checked) {
    passChar.push(numbers);
  }

  if(specialCase.checked) {
    passChar.push(specialChar);
  }
  console.log(passChar);
  passwordLength();
}

function passwordLength() {
  userPassLengthInput = prompt('Enter length of password, has to be a number between 8 and 128.');
  if (!userPassLengthInput) {
    passChar = [];
    return;
  }

  else {
    userPassLengthInput = parseInt(userPassLengthInput, 10);
  }

  if (userPassLengthInput >= 8 && userPassLengthInput <= 128) {
    for (let i = 0; i < userPassLengthInput; i++) {
      charType = random(passChar.length);
      char2 = (random(passChar[charType].length));
      char3 = passChar[charType][char2];
      password += char3;
    }
  }

  else {
    window.alert('The password length has to be a number between 8 and 128.');
    passwordLength();
  }
  passChar = [];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  selectPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);