function stringLength(str)
{
    str=str.toLowerCase();
    let count=0;
    for(i=0;str[i]!==undefined;i++)
    {
        count++;
    }
    return count;
}
console.log(stringLength("hello"));
