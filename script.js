let generateBtn = document.querySelector("#generate");

let passwordLength;
let chooseLowercase;
let chooseUppercase;
let chooseNumbers;
let chooseSpecialCharacters;

// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector("#password");
  passwordText.value = generatePassword;
}

// Listener to generate button
generateBtn.addEventListener("click", passwordLengthValidation);

// Password Length Prompt and Validation
function passwordLengthValidation() {
 passwordLength = parseInt(prompt("How long would you like your password to be?"));
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters"));
  }
  passwordCharactersValidation();
}

// Ask user about lowercase, uppercase, numbers, and special characters
function passwordCharactersValidation() {
  chooseLowercase = confirm("Click OK to include lowercase characters. CANCEL if not.");
  chooseUppercase = confirm("Click OK to include uppercase characters. CANCEL if not.");
  chooseNumbers = confirm("Click OK to include numeric values. CANCEL if not.");
  chooseSpecialCharacters = confirm("CLICK OK to include special characters. CANCEL if not.");
 // Validate at least one character type was selected
    while (chooseLowercase === false && chooseUppercase === false && chooseNumbers === false && chooseSpecialCharacters === false){
       alert("Please select OK to include at least one character type.");
         chooseLowercase = confirm("Click OK to include lowercase characters. CANCEL if not.");
         chooseUppercase = confirm("Click OK to include uppercase characters. CANCEL if not.");
         chooseNumbers = confirm("Click OK to include numeric values. CANCEL if not.");
         chooseSpecialCharacters = confirm("CLICK OK to include special characters. CANCEL if not.");
    }
    passwordGenerator();
}

let passwordNumbers = '0123456789'
let passwordLowerLetters = 'abcdefghijklmnopqrstuvwxyz'
let passwordUpperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let passwordSpecialCharacters = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'
let passwordString = "";
let generatePassword = "";

// Function to create the password
function passwordGenerator (){
  if (chooseLowercase) {
    passwordString = passwordString + passwordLowerLetters;
  }
  if (chooseUppercase) {
    passwordString = passwordString + passwordUpperLetters;
  } 
  if (chooseNumbers) {
    passwordString = passwordString + passwordNumbers;
  }
  if (chooseSpecialCharacters) {
    passwordString = passwordString + passwordSpecialCharacters;
  }
  for (let i = 0; i < passwordLength; i++) {
    generatePassword += passwordString.charAt(Math.floor(Math.random() * passwordString.length));
  };
// Add password to the screen
  writePassword();
}


