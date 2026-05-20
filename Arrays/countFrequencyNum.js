function frequencyNum(array)
{
    let count={}
    for(let num of array)
    {
        count[num] =(count[num] ||0)+1   
    }
    return count
}
console.log(frequencyNum([1,1,2,3,4]));
