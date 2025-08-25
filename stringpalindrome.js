let palindrome=(str)=>{
    str=str.toLowerCase();
    let rev=str.split("").reverse().join("");
    if(str===rev)
    {
       return "palindrome"
    }
    else
    {
    return "not palindrome"
    }
}
let str="malayalam";
console.log(palindrome(str));