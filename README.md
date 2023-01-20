# challenge3

User inputs for password length is limited between 8-128 characters.

textUpdated1, textUpdated2, textUpdated3, textUpdated4 traced down the string by user selection on whether they want to include any uppercase/lowercase/number/special character through slice string method.

Up th here, the passwordlength and textUpdated4 have saved all the information needed.

generatePassword function do the job of selecting the random password through math.random() built-in function from textUpdated4 string with PasswordLength length.

document.querySelector("#password") interact with the attribute id="password"

generateBtn.addEventListener("click", writePassword) add an eventlister when the generate button was clicked
