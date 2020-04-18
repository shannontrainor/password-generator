//HOMEWORK

//Array of special characters, numbers, lowercase, uppercase

var specialCharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', ':', ';', '<', ',', '>', ".", '?', '/']
var numericNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function generatePassword() {
  //variable to store length of pw
  var length = prompt("How many characters would you like your password to be?")
  console.log(length)

  //conditional statement checking is length is number
  if (isNaN(length) === true) {
    alert("Password length must be a number")
    return
  }

  //conditional statement checking is length is number
  if (isNaN(length) === true) {
    alert("Password length must be a number")
    return
  }

  if (length < 8) {
    alert("Password must be at least 8 characters")
    return
  }
  if (length > 128) {
    alert("Password can be no more than 128 characters")
    return
  }

  //variables to store user responses
  var specialChar = confirm("Click ok to include special characters");
  var numericNum = confirm("Click ok to include numeric numbers");
  var lowercase = confirm("Click ok to include lowercase letters");
  var uppercase = confirm("Click ok to include uppercase letters");

  //if statement checking user entered at least one character type
  if (
    specialChar === false &&
    numericChar === false &&
    lowercase === false &&
    uppercase === false
  ) {
    alert("You must select at least one character type");
    return
  }


}

