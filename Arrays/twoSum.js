function twoSum(array,target)
{
    

    for(let i=0;i<array.length-1;i++)
    {
        for(let j=1;j<array.length;j++)
        if(array[i]+array[j]===target)
        {
            return [i,j]
        }
    }
}
console.log(twoSum([1,7,10,2],9));
