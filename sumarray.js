let array =[1,2,3,5];
let max=array[0];
let min=array[0] 
for(i=0;i<array.length;i++)
{
    if(array[i]>max)
    {
        max=array[i];
    }
    else if(array[i]<min)
    {
        min=array[i];
    }
}
console.log(max);
console.log(min);