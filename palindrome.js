function checkPalindrome(inputString) {
  var result = inputString.split('').reverse().join('');

  if(inputString === result){
    return "Palidrom";
  }
  else
    {
      return "NOT Palidrom";
    }
}
console.log(checkPalindrome("hubert"));
