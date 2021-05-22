var capital = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var special = "!@#$%^&*()_+-=[]{},./?";




function getPasswordOptions(params) {
    var length = prompt("How many characters would you like in your password, passwod needs to be 8-128 characters!");
    if (isNaN(length) === true) {
        return alert("Password must be a number!")
    }

    if (length < 8 || length > 128 ){
        return alert("Password must contain atleast 8 charaters, and a max of 128 characters!")
    }


}





function generatePassword() {
    
}






const generateBtn = document.querySelector("#generate")

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}
// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);