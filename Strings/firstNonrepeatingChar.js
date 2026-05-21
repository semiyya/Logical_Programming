function nonRepeatingchar(str)
{
    let count={};
    for(let char of str)
    {
        count[char]=(count[char]||0)+1;

    }
    for(let key in count)
    {
        if(count[key]===1)
        {
            return key
        }
        
    }
    return "not found"
}
console.log(nonRepeatingchar("hello"));
