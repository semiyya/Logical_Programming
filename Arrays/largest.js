function largestNum(array)
{
   let largest=0;

   for(let i=0;i<=array.length;i++)
   {

      if(array[i]>largest)
      {

        largest=array[i]
      }

   }

return largest

}
console.log(largestNum([1,3,6,45,2]));
