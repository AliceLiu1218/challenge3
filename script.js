// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(PasswordLength,textUpdated4){
  for (var i = 0; i < PasswordLength; i++) {
    var randomNumber = Math.floor(Math.random() * textUpdated4.length);
    password += textUpdated4.substring(randomNumber, randomNumber +1);
  }
  console.log(password);
  return password;
}

// Write password to the #password input
function writePassword() {
  
  //Grab value of password length from prompt window
  var UserInputPWLen = prompt("Please select for password length (Hint: Any value from 8 to 128 characters)");
  // Make sure the length is within the accpted range
  if (UserInputPWLen > 129 || UserInputPWLen < 8){
    alert("Invalid Length of Characters. Please select again")
    return;
    console.log(UserInputPWLen);
  }else{
    var PasswordLength = UserInputPWLen;
    console.log(PasswordLength)
  }

  //Decide for what character type should be included
  //Start from an original string which includes all types of characters
  var text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  var textUpdated1 = ""; //Initialize updated text string as empty first
  var count = 0;
  // start to choose character type and modify the text string
  var UserInputLowC = prompt("Do you want to include any lowercase charchter? Type 'YES' OR 'NO'(casesensitive)");
  if (UserInputLowC === "YES"){
    textUpdated1 = text;
    count++;
  }else if (UserInputLowC === "NO"){
    textUpdated1 = text.replace(text.slice(0, 26),"");
  }else{
    alert("Invalid inputs. Have to start over.Hint: All type letters are casesensitive. Only uppercase letters are accepted")
    return;
  }

  var UserInputUpperC = prompt("Do you want to include any uppercase charchter? Type 'YES' OR 'NO'(casesensitive)");
  if (UserInputUpperC === "YES"){
    var textUpdated2 = textUpdated1;
    count++;
  }else if (UserInputUpperC === "NO"){
    textUpdated2 = textUpdated1.replace(text.slice(26, 53),"");
  }else{
    alert("Invalid inputs. Have to start over.Hint: All type letters are casesensitive. Only uppercase letters are accepted")
    return;
  }

  var UserInputNum = prompt("Do you want to include any number charchter? Type 'YES' OR 'NO'(casesensitive)");
  if (UserInputNum === "YES"){
    var textUpdated3 = textUpdated2;
    count++;
  }else if (UserInputNum === "NO"){
    textUpdated3 = textUpdated2.replace(text.slice(53, 62),"");
  }else{
    alert("Invalid inputs. Have to start over.Hint: All type letters are casesensitive. Only uppercase letters are accepted")
    return;
  }

  var UserInputSpecial = prompt("Do you want to include any special charchter? Type 'YES' OR 'NO'(casesensitive)");
  if (UserInputSpecial === "YES"){
    var textUpdated4 = textUpdated3; //FINAL TEXT
    console.log(textUpdated4);
  }else if (UserInputSpecial === "NO"){
    if (count != 0){
      textUpdated4 = textUpdated3.replace(text.slice(62, 72),""); //FINAL TEXT
      console.log(textUpdated4);
    }else{
      alert("You must contain the sepcial characters, otherwise the secure password wiil not be generated. Start Over required")
      return;
    }
  }else{
    alert("Invalid inputs. Have to start over.Hint: All type letters are casesensitive. Only uppercase letters are accepted")
    return;
  }

  var passwordGen = generatePassword(PasswordLength,textUpdated4);
  
  var passwordText = document.querySelector("#password");
  passwordText.textContent = passwordGen;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
