//HOMEWORK

//Array of special characters, numbers, lowercase, uppercase

var specialCharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', ':', ';', '<', ',', '>', ".", '?', '/']
var numericNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function generatePasswordOptions() {
  //variable to store length of pw
  var length = prompt("How many characters would you like your password to be?");
  console.log(length);

  //conditional statement checking if length is number
  if (isNaN(length) === true) {
    alert("Password length must be a number");
    return
  }

  //check if input is less than 8
  if (length < 8) {
    alert("Password must be at least 8 characters");
    return
  }

  //check if input is more than 128
  if (length > 128) {
    alert("Password can be no more than 128 characters");
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
    numericNum === false &&
    lowercase === false &&
    uppercase === false
  ) {
    alert("You must select at least one character type");
    return
  }

  //object with keys storing user response
  var passwordOpt = {
    passwordlength: length,
    includesSpecial: specialChar,
    includesNumeric: numericNum,
    includesLowercase: lowercase,
    includesUppercase: uppercase,
  }
  return passwordOpt;
}
//function to select random array
function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];
  return randomElement;
}
//function to set options for password
function generatePassword() {
  var options = generatePasswordOptions()
  console.log("object that is returned", options);

  var result = []      //array storing password as it is built
  var possibleChar = []  //array storing types of characters to include in pw
  var guaranteeChar = []  //array storing one of each chosen character

  if (options.includesSpecial) {
    possibleChar = possibleChar.concat(specialCharacters);   //will give new value to possibleChar
    guaranteeChar.push(getRandom(specialCharacters));  //will provide random character
    console.log("possible", possibleChar);
    console.log("guarantee", guaranteeChar);
  }

  if (options.includesNumeric) {
    possibleChar = possibleChar.concat(numericNumbers); // will give new value to possibleChar
    guaranteeChar.push(getRandom(numericNumbers));  // will provide random number
    console.log("possible", possibleChar);
    console.log("guarantee", guaranteeChar);
  }

  if (options.includesLowercase) {
    possibleChar = possibleChar.concat(lowercaseLetters); //will give new value to possibleChar
    guaranteeChar.push(getRandom(lowercaseLetters)); //will get random lowercase letters
    console.log("possible", possibleChar);
    console.log("guarantee", guaranteeChar);
  }

  if (options.includesUppercase) {
    possibleChar = possibleChar.concat(uppercaseLetters); //will give new value to possibleChar
    guaranteeChar.push(getRandom(uppercaseLetters));  //will get random uppercase letters
    console.log("possible", possibleChar);
    console.log("guarantee", guaranteeChar);
  }

  for (var i = 0; i < options.passwordlength; i++) {
    var possibleCharacter = getRandom(possibleChar);
    console.log("random characters", possibleCharacter);
    result.push(possibleCharacter)     // will push into array
  }
  return result.join("");  // will log result of input, puts array into strring & takes out seperation
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //console.log("working")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var response = passwordText.result;

  passwordText.textContent = response;
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
