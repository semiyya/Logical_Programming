function charOccurence(str,char)
{
    str=str.toLowerCase();
    char=char.toLowerCase();
    count=0;
    for(i=0;i<=str.length;i++)

    {
        if(str[i]==char)
        {
            count++;
        }
        
    }
    return count;
}
console.log(charOccurence("java","a"));