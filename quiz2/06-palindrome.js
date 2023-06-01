
function isPalindrome(word){
  return (String(word.toLowerCase()).split("").reverse().join("") === String(word.toLowerCase())) ? true : false;
}

console.log(isPalindrome('kasur ini rUsak'));//true