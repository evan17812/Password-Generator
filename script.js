// Assignment Code
var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("#reset");
var copyBtn = document.querySelector("#copy");
var allchar = '';
var pass = '';
var input;
var acceptedpass;

function passlength(){
input = prompt("Please input a number to set password length. \r\nThe password length needs to be at least 8 characters and no more than 128 characters long.");
var minlength = 8;
var maxlength = 128;
if(input >= minlength && input <= maxlength){
  alert('You have choosen your password length to be '+ input + ' characters long!');
  acceptedpass = true;
  return acceptedpass;
}
else{
  alert("The password needs a minimum of 8 characters and no more than 128 characters, please try again.")
  acceptedpass = false;
  return acceptedpass;
  }
}


function lowercase() {
  if(confirm("Do you want to include lowercase letters?") == true){
    var lowerchar = 'abcdefghijklmnopqrstuvwxyz';
    allchar += lowerchar;
    return allchar;
  }
  else {
    return allchar;
  }
 }

 function uppercase(){
  if(confirm("Do you want to include uppercase letters?") == true){
    var upperchar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    allchar += upperchar;
    return allchar;
  }
  else {
    return allchar;
    
  }
 }
 function numchar(){
  if(confirm("Do you want to include numeric characters?") == true){
    var numeric = '0123456789';
    allchar += numeric;
    return allchar;
  }
  else {
    return allchar;
  }
 }

 function specialchar(){
  if(confirm("Do you want to include special characters?") == true){
    var specialchar = "&* {}[],=-().+;'/";
    allchar += specialchar;
    return allchar;
  }
  else {
    return allchar;
  }
 }


function generatePassword() {
alert("Lets generate your password.\r\nPlease select your password criteria.");
passlength();
if (acceptedpass === true){
  lowercase();
  uppercase();
  numchar();
  specialchar();
  if(allchar.length == 0){
    alert("At least one character criteria must be selected");
    generatePassword();
  }
  else{
    while(pass.length < input){
      pass += allchar[Math.floor(Math.random() * allchar.length)];
    }
  return pass;
  }
}
else {
  input = '';
  generatePassword();
}
  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function reset(){
  window.location.reload();
}

function copytext(){
  navigator.clipboard.writeText(pass);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
resetBtn.addEventListener("click", reset);
copyBtn.addEventListener("click", copytext);
