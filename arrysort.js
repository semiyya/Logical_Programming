let array =[10,20,50,40,30]
let i,j;
let temp=0;
for(i=0;i<=4;i++)
{
   for(j=i+1;j<=4;j++)
   {
      if(array[i]>array[j])
      {
        temp=array[i];
        array[i]=array[j];
        array[j]=temp;
      }
   }
   
}
for(i=0;i<=4;i++)
{
    console.log(array[i])
}