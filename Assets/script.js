// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);

// Function that generates password
function generatePassword(){
  var passwordChar = [];

  var finalPassword=[];

  //Types of Characters to be selected by User
  var lowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numeralChar = [1,2,3,4,5,6,7,8,9,0];
  var specialChar = ["~","!","@","#","$","%","^","&","*","(",")","_","+","`","_","+","=","<","?","/",];

  // Prompt user for password length
  var passwordLength= prompt("Please tell many how many characters you would like in your password?  Please choose a number between 8-128.") ;
  
  //Convert passwordLength to an integer
  var numericPassLength= parseInt(passwordLength);

  // Check to ensure password is less than 128 characters, greater than 8 characters, and a number
  if(passwordLength > 128 || passwordLength <8 || !numericPassLength) {
    alert("Please choose a number between 8 and 128.  Your input must also be numeric.");
    return;
  } 
  else{alert("Your password will be "+numericPassLength+" characters long")}

  // Next series of variable and alerts checks to see what types of characters the user wants to use
  var lowerCase = confirm("Do you want to use lower case characters in your password?");
  var upperCase = confirm("Do you want to use upper case characters in your password?");
  var numeric = confirm("Do you want to use numeric characters in your password?");
  var special = confirm("Do you want to use special characters in your password?");

  //If user does not select atleast one type of character then they are prompted to restart and select at least one character type
  if(!lowerCase && !upperCase && !numeric && !special){
    alert("You must choose atleast one character type!");
    return;
  }

  //Add necessary characters to passwordChar array based on user reponse
  if ( lowerCase  ){
    for (var i=0;i<lowerCaseChar.length; i++){
      passwordChar.push(lowerCaseChar[i]);
    }
  }

  if ( upperCase  ){
    for (var i=0;i<upperCaseChar.length; i++){
      passwordChar.push(upperCaseChar[i]);
    }
  }

  if ( numeric  ){
    for (var i=0;i<numeralChar.length; i++){
      passwordChar.push(numeralChar[i]);
    }
  }

  if ( special  ){
    for (var i=0;i<specialChar.length; i++){
      passwordChar.push(specialChar[i]);
    }
  }

  //Loop to add user defined number of random characters to variable finalPassword to output the random password
  for (i=0 ; i<numericPassLength;i++){
    var index = Math.floor(Math.random()*passwordChar.length);

    finalPassword = finalPassword+passwordChar[index];

  }
  //ads finalPassword output as passwordText.value to print at #password in HTML
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

}

// Function to copy generated password to the clipboard
function copyToClipboard (){

  // grabs element containing the password
  var password = document.querySelector("#password");

  // checks to be sure user has generated a password before copying to clipboard
  if(!password.value){
    alert("You must first generate a password.");
    return;
  } else{
    window.navigator.clipboard.writeText(password.value);
  }
  //After copying to clipboard, notify user that action is complete
  alert("Your new password has been copied to your clipboard!");
}
