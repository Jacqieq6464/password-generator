// Assignment Code
//do you want to use Upper Case characters - var = globally scoped

var upperCase = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z']


//Array of lower case characters - do you want to use Lower Case
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',  'u',  'v',  'w', 'x', 'y', 'z'];


//do you want to use numbers
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//do you want to use special characters
var symbols = [ '@', '%', '+', '\\',  '/',  '!', '#', '$',  '^', '?',  ':', ',',  ')', '(', '}', '{',  ']',  '[',  '~',  '-',  '_',  '.']



var generateBtn = document.querySelector("#generate");//id selector = html line 28

function generatePassword(){
  //parseInt applied to prompt to convert any string values to numeric value
  var passwordLength = parseInt(prompt ("How many characters you would like your password to have?"))
  
  //validating password ie that it is the correct length 
  //validating password ie that a number not alpha has been used to choose password length

  if (Number.isNaN (passwordLength)){
    alert("Your entry is invalid, please re-enter a valid number")

    return //stops the code being processed beyond this point. 
  }
  
  if (passwordLength < 8 ){
    alert("Your choice is invalid, please enter a number that is greater than 8")
    return
  }

  if (passwordLength > 128 ){
    alert("Your choice is invalid, please enter a number that is less than 128")
    return
  }

  var confirmUpCase = confirm ("Would you like to use upper case letters in your password? Press ok to confirm or cancel to ignore");
    
      // confirmUpCase = confirm = "ok", decline = "cancel");
      if (confirmUpCase) {
        alert ("Upper Case selected");
      } else {
        alert("Upper Case not Selected");
      }

    // }
  
  var confirmLowCase = confirm("Would you like to use lower case letters in your password? Press ok to confirm or cancel to ignore");
    
    if (confirmLowCase){
    alert ("Lower Case Selected");
    } else {
    alert ("Lower Case not Selected");
    }
  
  var confirmNumbers = confirm("Would you like to use numbers in your password? Press ok to confirm or cancel to ignore");
  
    if (confirmNumbers){
    alert ("Numbers Selected");
    } else {
    alert ("Numbers not Selected");
    }


  var confirmSymbols = confirm("Would you like to use symbols in your password? Press ok to confirm or cancel to ignore");

  if (confirmSymbols){
    alert ("Symbols Selected");
  } else {
    alert ("Symbols not Selected");
  }



  //for loop allowing the selection of the characters from the array of characters.
  //var characters = upperCase.concat(lowerCase, numbers, symbols);
  
  for(var i, i = 0; i < characters.length; i++){
    generatePassword += characters.charAt(math.random() * characters.length)
}



};

// var generatePassword = upperCase.concat(lowerCase, numbers, symbols);
// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");//id selector = html line 22 

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
