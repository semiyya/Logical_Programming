function duplicateChar(str)

{
     let resultStr=""

    for(let i=0;i<str.length;i++)
    {
       
       if(!(resultStr).includes(str[i]))
       {

        resultStr+=str[i]
       }

        }
        return resultStr

    }

console.log(duplicateChar("Singing"));
