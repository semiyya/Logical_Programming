function missingNum(array)
{
    for(let i=0;i<array.length;i++)
    {
        if(array[i+1]-array[i]!==1)
        {
            return array[i]
        }
    }
}
console.log(missingNum([1,3,4,5]));
