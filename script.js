// Assignment Code
var special = ['!', '@', '#', '%','^','(',')','*', '&', '/','>', '.',';'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = ['0','1','2','3','4','5','6','7','8','9'];


// Write password to the #password input

function generatePasswordOptions () {
  var length= parseInt (
    prompt ("How many characters would you like this password to contain?"),
    10
  );
// Conditional Statements 
  if (Number.isNaN(length)) {
    alert ("Password Must Be a Number");
    return null;
  }

  if (length < 8) {
    alert ("Password Must More Than 8 Characters");
    return null;
  }

  if (length > 128) {
    alert ("Password Must Less Than 128 Characters");
    return null;
  }

// Confirmation of Characters 
var hasSpecial = confirm(
  "Click Ok to Include Special Characters"
);

var hasNumber = confirm(
  "Click Ok to Include Numbers"
);

var hasUpper = confirm(
  "Click Ok for Upper Letters"
);

var hasLower = confirm(
  "Click Ok for Lower Letters"
);

if (
  hasNumber === false && 
  hasSpecial === false && 
  hasUpper === false && 
  hasLower === false  
) {
 alert ("Select at least one type of character");
 return null;
}
  
var passwordOptions = {
  length: length,
  hasNumber: hasNumber,
  hasSpecial: hasSpecial,
  hasUpper: hasUpper,
  hasLower: hasLower,
};
return passwordOptions;
}

function getRandomPassword(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomCharacter = arr[randomIndex];
  return randomCharacter;
}

function generatePassword() {
  var options = generatePasswordOptions ();
  var result = [];  
  var availableCharacters = [];
  var outputCharacters = [];

  if (!options) return null;

  if (options.hasSpecial) {
    availableCharacters = availableCharacters.concat(special);
    outputCharacters.push(getRandomPassword(special))
  }

  if (options.hasNumber) {
    availableCharacters = availableCharacters.concat(number);
    outputCharacters.push(getRandomPassword(number))
  }

  if (options.hasUpper) {
    availableCharacters = availableCharacters.concat(upper);
    outputCharacters.push(getRandomPassword(upper))
  }

  if (options.hasLower) {
    availableCharacters = availableCharacters.concat(lower);
    outputCharacters.push(getRandomPassword(lower))
  }

  //Iterate over password length
  for (var i = 0; i < options.length; i++) {
    var availableCharacters = getRandomPassword (availableCharacters);
    result.push (availableCharacters);
  }

  for (var i = 0; i < outputCharacters.length; i++) {
    result [i] = outputCharacters[i];
    }

 return result.join("");
}

var generateBtn = document.querySelector("#generate"); // The variable is holding the button.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



