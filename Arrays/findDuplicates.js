

function finDuplicate(array)
{
    let duplicates=[]
    for(let i=0;i<array.length-1;i++)
    {
        for(let j=i+1;j<=array.length;j++)
        {
            if(array[i]==array[j])
            {
              duplicates.push(array[j])
            }
        }
    }
    return duplicates
}
console.log(finDuplicate([1,2,4,7,3,3,2,5,1,7]))