function isPalindrome(str)
{
  str=str.toLowerCase();
const reverse= str.split("").reverse().join("");
  return reverse===str;
  


}
console.log(isPalindrome("MALAYALAM"));