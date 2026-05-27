function Anagram(str1,str2)
{

    if(str1.length!=str2.length)
    {
        return "not anagram"
    }
    newstr1=str1.split("").sort().join("")
    newstr2=str2.split("").sort().join("")
    if(newstr1==newstr2)
    {
        return "Anagram"
        
    }
else{

   return "Not anagram"
}

   
}
console.log(Anagram("silent","listen"));
