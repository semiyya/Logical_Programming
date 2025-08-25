let array =[12,5,8,20];
let max=array[0];
let min=array[0];
for(i=0;i<=3;i++)
{
    if(array[i]>max)
    {
        max=array[i];
    }
    if(array[i]<min)
    {
        min=array[i];
    }
}
console.log("maximum is=",max);
console.log("minimum is=",min);