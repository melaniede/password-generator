// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


generateBtn.addEventListener("click", passwordLengthValidation)
let passwordLength;

// Password Length Prompt and Validation
function passwordLengthValidation() {
 passwordLength = parseInt(prompt("How long would you like your password to be?"));
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters"));
  }
    passwordCharactersValidation();    
}

//const passwordCharacters = prompt("What character types would you like to include?");


// Ask user about lowercase, uppercase, numeric, and special characters
function passwordCharactersValidation() {
  let chooseLowercase = confirm("Would you like to include lowercase characters?");
  let chooseUppercase = confirm("Would you like to include uppercase characters?");
  let chooseNumeric = confirm("Would you like to include numeric values?");
  let chooseSpecialCharacters = confirm("Would you like to include special characters?");
}
// Create radio buttons for lowercase, uppercase, numeric, and/or special characters
