// array of lower case
// array of upper case
// array of special characters
// array of numbers


// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function generatePasswordOptions() {

  // variable to store length of pw coming from user input response
  var length = prompt("How many characters would you like your password to be?")
  console.log(length)

  // conditional statement checking if length is number
  // if length === true, user did not enter a number
  // ends with return to start user again
  if (isNaN(length) === true) {
    alert("Password length must be a number")
    return
  }

  // conditional statement to check if length is less than 8
  if (length < 8) {
    alert("Password must be at least 8 characters")
    return
  }

  //conditional statement to check if length is more than 128
  if (length > 128) {
    alert("Password must be no more than 128 characters")
    return
  }

  // variable storing response yes or no to spec char
  var specialChar = confirm("Click ok to include special characters")

  // variable storing response yes or no to numeric numbers
  var numericChar = confirm("Click ok to include numeric numbers")

  // variable storing response yes or no to lowercase letters
  var lowercase = confirm("Click ok to include lowercase letters")

  // variable storing response yes or no to uppercase letters
  var uppercase = confirm("Click ok to include uppercase letters")

  var charSet = "";

  console.log(specialChar, numericChar, lowercase, uppercase)











}