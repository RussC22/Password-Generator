// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "123456789".split("");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCaseLetters = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
var special = "!@#$%^&*()_+=-/\|".split("");
var input = [];

// Write password to the #password input
// prompts after clicking for password criteria
function generatePassword() {
console.log(numbers,upperCaseLetters,lowerCaseLetters,special);
}
var passwordLength = parseInt(prompt("choose a length of at least 8 characters and no more than 128 characters"))

// length of password being at 8 characters but no more than 128 characters
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  passwordLength = parseInt(prompt("choose a length of at least 8 characters and no more than 128 characters"))
  // code block to be executed
}
// Character types to include or exclude lowercase, uppercase, numeric, and/or special characters
var includeSpecialCharacters = confirm("Do you want to use Special characters? ")
var includeUpperCase = confirm("Do you want to use Uppercase letters? ")
var includeLowerCase = confirm("Do you want to use Lowercase letters? ")
var includeNumber = confirm("Do you want to use Random numbers?")



function writePassword() {
  console.log("Hello");
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

if (includeNumber === true) {
  input.push(numbers); 
 
 console.log("numbers")
}
if (includeSpecialCharacters === true) {
 input.push(special); 

console.log("special")
}
if (includeLowerCase === true) {
 input.push(lowerCaseLetters); 

console.log("lowerCase")
}
if (includeUpperCase === true) {
 input.push(upperCaseLetters); 

console.log("upperCase")
}

for (var i = 0; i < lowerCaseLetters.length; i++) {
  upperCaseLetters[i] = lowerCaseLetters[i].toUpperCase
}


// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);


