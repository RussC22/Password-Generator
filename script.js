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

if (includeNumber === true) {
  input += numbers; 
}
console.log(input)

if (includeSpecialCharacters === true) {
 input += special; 

 console.log("special")
}
console.log("special")
if (includeLowerCase === true) {
 input += lowerCaseLetters; 

console.log("lowerCase")
}
if (includeUpperCase === true) {
 input += upperCaseLetters; 

console.log("upperCase")
}
var finalPass = ""
for (var i = 0; i < passwordLength; i++) {
  var randomNum = Math.floor(Math.random()* input.length)
  // upperCaseLetters[i] = lowerCaseLetters[i].toUpperCase
finalPass += input[randomNum] 
console.log(finalPass)
 
}
return (finalPass)
}
function writePassword() {
  console.log("Hello");
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);


