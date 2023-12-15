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

//an array that will hold all of the types that user choose
var choosenTypes = [];
//holds the user answer of how long is the password
var passLength = 0; 

//get user input for types of charachter to be included, 
//return true if user didn't choose at least one selection, false otherwise.
function getUserInputForTypes() {
  const charTypes = [];
  choosenTypes = [];

  getUserAnwser("Would you like to include Lowecase characters?", lowerCasedCharacters);
  getUserAnwser("Would you like to include Uppercase characters?", upperCasedCharacters);
  getUserAnwser("Would you like to include Numeric characters?", numericCharacters);
  getUserAnwser("Would you like to include Special characters?", specialCharacters);

  function getUserAnwser(question, typeArray) {
    charTypes.push(confirm(question));
    if (charTypes[charTypes.length - 1]) {
      choosenTypes.push(typeArray);
    }
  }

  return charTypes.every(e => e === false);
}

function getUserTypes() {
  if (getUserInputForTypes() === true) {
    //user didn't choose anything, let's start the process again.
    alert("You must choose at least one type!");
    getUserTypes();
  }
}

// Function to prompt user for password options
function getPasswordOptions() {
  passLength = 0;

  //repeat the prompt until user gives
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("How many characters would you like your password to contain?(Type a number between "));
  }

  getUserTypes();
}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  //ok we got the options, now generate the password  
  var retVal = "";
  var currCharType;
  passLength -= 1;//array use index
  for(var i=0;i<=passLength;i++)
  {
    //first, get at random a type of char based on user choice
    currCharType = getRandom(choosenTypes);
    //now based on that type, get a charachter at random
    retVal += getRandom(currCharType);
  }

  return retVal;
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