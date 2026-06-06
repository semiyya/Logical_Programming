function commonElement(array1,array2)
{

    let result=[]
     for(let i=0;i<array1.length;i++)
     {
        for(let j=0;j<array2.length;j++)
        {

          if(array1[i]==array2[j]) 
            {
                result.push(array1[i])
            } 

        }
     }

     return result

}
console.log(commonElement([1,2,3,4,5,9],[2,7,4,5,9]));
