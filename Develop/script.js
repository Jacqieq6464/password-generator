// Assignment Code
//do you want to use Upper Case characters - var = globally scoped

var upperCase = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z']


//Array of lower case characters - do you want to use Lower Case
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',  'u',  'v',  'w', 'x', 'y', 'z'];


//do you want to use numbers
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//do you want to use special characters
var specialCharacters = [ '@', '%', '+', '\\',  '/',  '!', '#', '$',  '^', '?',  ':', ',',  ')', '(', '}', '{',  ']',  '[',  '~',  '-',  '_',  '.']


var generateBtn = document.querySelector("#generate");//id selector = html line 28

function generatePassword(){
  var passwordLength = prompt ("how many characters would you like in your password?")
  console.log(passwordLength)
//if password <8 alert, if password >128 alert

  //for loop allowing the selection of the characters from the array of characters.
  for(var i, i = 0; i < characters.length; i++){
    generatePassword += characters.charAt(math.floor(math.random() * characters.length))
}
};
// Write password to the #password input
function writePassword() {
  
  //declaring characters elibible to be used in random password generator
  //var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@€$%^&*()+-:<>?/|\{}";//why are 2 chars blue?

  var password = generatePassword();
  var passwordText = document.querySelector("#password");//id selector = html line 22 

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
