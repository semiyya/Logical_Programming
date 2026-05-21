function longestWord(sentance)
{
    let str=sentance.split(" ")
    let longest=""

    for(let i=0;i<str.length;i++)
    {
       if(str[i].length>longest.length)
       {
        longest=str[i]
       }
    }
    return longest
}
console.log(longestWord("helo dubai world"));
