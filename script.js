// Assignment Code
var generateBtn = document.querySelector("#generate");

let passwordLength;
let chooseLowercase;
let chooseUppercase;
let chooseNumeric;
let chooseSpecialCharacters;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


generateBtn.addEventListener("click", passwordLengthValidation)

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
  let chooseLowercase = confirm("Click OK to include lowercase characters. CANCEL if not.");
  console.log(chooseLowercase);
  let chooseUppercase = confirm("Click OK to include uppercase characters. CANCEL if not.");
  console.log(chooseUppercase);
  let chooseNumeric = confirm("Click OK to include numeric values. CANCEL if not.");
  console.log(chooseNumeric);
  let chooseSpecialCharacters = confirm("CLICK OK to include special characters. CANCEL if not.");
  choose.log(chooseSpecialCharacters);
 // Validate at least one character type should be selected
    // while (chooseLowercase === false && chooseUppercase === false && chooseNumeric === false && chooseSpecialCharacters === false){
    //   alert("Please select OK to include at least one character type.")
    //   let chooseLowercase = confirm("Click OK to include lowercase characters. CANCEL if not.");
    //   let chooseUppercase = confirm("Click OK to include uppercase characters. CANCEL if not.");
    //   let chooseNumeric = confirm("Click OK to include numeric values. CANCEL if not.");
    //   let chooseSpecialCharacters = confirm("CLICK OK to include special characters. CANCEL if not.");
    }
}
// Create radio buttons for lowercase, uppercase, numeric, and/or special characters
