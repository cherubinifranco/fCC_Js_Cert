function telephoneCheck(str) {
  let regForDigits = /[\d-()]/gi;
  let numbers = str.match(regForDigits).join("");
  let regValidation = /^1?[0-9]{3}-?[0-9]{3}-?[0-9]{4}$|^1?\([0-9]{3}\)-?[0-9]{3}-?[0-9]{4}$/;

  return regValidation.test(numbers);
}







console.log(

telephoneCheck("1")

)