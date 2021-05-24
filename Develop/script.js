// variables for customizing password 
var capital = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var special = "!@#$%^&*()_+-=[]{},./?";

// 
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
//
function getPasswordOptions() {
    var length = prompt("How many characters would you like in your password, passwod needs to be 8-128 characters!");
    if (isNaN(length) === true) {
        return alert("Password must be a number!")
    }

    if (length < 8 || length > 128 ){
        return alert("Password must contain atleast 8 charaters, and a max of 128 characters!")
    }
    var hasCapital = confirm("Would you like Uppercase characters in your password?");
    var hasLower = confirm("Would you like Lowercase characters in your password?");
    var hasNumeric = confirm("Would you like Numeric characters in your password?");
    var hasSpecial = confirm("Would you like Special (symbols) characters in your password?");

    if (hasCapital === false && hasLower === false && hasNumeric === false && hasSpecial === false) {
        return alert("Must choose one of the following for valid password!")
    }

    var options = {
        length: length,
        hasCapital: hasCapital,
        hasLower: hasLower,
        hasNumeric: hasNumeric,
        hasSpecial: hasSpecial
    }

    return options;
}

function generatePassword(){
    var givenOptions = getPasswordOptions();
    var password = "";
    var passwordDomain = "";

    if (givenOptions["hasCapital"]) {
        passwordDomain = passwordDomain + capital;
    }

    if (givenOptions["hasLower"]) {
        passwordDomain = passwordDomain + lower;
    }

    if (givenOptions["hasNumeric"]) {
        passwordDomain = passwordDomain + numeric;
    }

    if (givenOptions["hasSpecial"]) {
        passwordDomain = passwordDomain + special;
    }

    for (var i = 0; i < givenOptions["length"]; i++) {
        var passwordCharIndex = Math.floor(Math.random() * passwordDomain.length);
        password = password + passwordDomain[passwordCharIndex];
        console.log(i);
    }

    return password;
    
}
// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);