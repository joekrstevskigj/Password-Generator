// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//get user input for types of charachter to be included, 
//return true if user didn't choose at least one selection, false otherwise.
function getUserInputForTypes()
{
  const charTypes = [];

  charTypes.push(confirm("Would you like to include Lowecase characters?"));
  charTypes.push(confirm("Would you like to include Uppercase characters?"));
  charTypes.push(confirm("Would you like to include Numeric characters?"));
  charTypes.push(confirm("Would you like to include Special characters?"));

  return charTypes.every(e => e === false);
}

function getUserTypes()
{
  if(getUserInputForTypes() === true)
  {
    //user didn't choose anything, let's start the process again.
    alert("You must choose at least one type!");
    getUserTypes();
  }
}

// Function to prompt user for password options
function getPasswordOptions() {
  let passLength = 0;
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("How many characters would you like your password to contain?"));
  }

  getUserTypes();
  alert("Great!");
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);