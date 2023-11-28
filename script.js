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
  // Function to prompt user for password options
  function getPasswordOptions() {
    // Asking for the required password length
    var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  
    // Validate the input
    if (length === null || isNaN(length) || length < 8 || length > 128) {
      alert("Invalid length. Please enter a number between 8 and 128.");
      return null;
    }
  
    // Confirm the inclusion of character types
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");
  
    // Validate that at least one character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("At least one character type must be selected.");
      return null;
    }
    return {
      length: parseInt(length),
      includeLowercase: includeLowercase,
      includeUppercase: includeUppercase,
      includeNumeric: includeNumeric,
      includeSpecial: includeSpecial
    };
  }

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  // Return an empty if options arent valid
  if (!options) {
    return "";
  }
  var allChars = "";
  var password = "";

  // Combining character together
  if (options.includeLowercase) allChars += lowerCasedCharacters.join('');
  if (options.includeUppercase) allChars += upperCasedCharacters.join('');
  if (options.includeNumeric) allChars += numericCharacters.join('');
  if (options.includeSpecial) allChars += specialCharacters.join('');


  // Generate the password
for (var i = 0; i < options.length; i++) {
  password += getRandom(allChars);
}

return password;

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