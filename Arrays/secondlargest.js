// function secondLargest(array)
// {



     
//     for(let i=0;i<array.length;i++)
//         {
//               if(array[i]<array[i+1])
//               {
//                 array[i]=array[i+1];
//                 array[i+1]=array[i]
//               }
              
//         }
//         return array[1]
// }
// console.log(secondLargest([5,3,10,20,20,8]))


// function secondLargest(array) {
//     let first = -Infinity;
//     let second = -Infinity;

//  for(let num of array)
//  {
//     if(num>first)
//     {
//       second=first
//       first=num
//     }
//     else if(num>second&&num!=first)
//     {
//       second=num
//     }
    
    
//  }
//    return second
// }
//  console.log(secondLargest[10,5,20,20,8]);
 
// function secondLargest(arr) {
//     let first = -Infinity;
//     let second = -Infinity;

//     for (let num of arr) {
//         if (num > first) {
//             second = first;
//             first = num;
//         } else if (num > second && num !== first) {
//             second = num;
//         }
//     }

//     return second === -Infinity ? null : second;
// }

// // Example
// console.log(secondLargest([10, 5, 20, 8, 20])); // Output: 10

// function secondlargest(array)
// {
//     let first =-Infinity ;
//     let second=-Infinity;
//     for(let num of array)
//     {
//         if(num>first)
//         {
            
            
//             first=num;    
//             second=first;
//         }
//         else if(num>second&&num!==first)
//         {
//             second=num;

//         }
//     }
//     return second===-Infinity ? null  : second
// }
// console.log(secondlargest([10, 5, 20, 8, 20]));


function secondLargest(array)
{

    let firstLargest= -Infinity 
    let secondLargest= -Infinity
    
    for(let num of array)
    {

        if(num>firstLargest)
        {
            secondLargest=firstLargest
            firstLargest=num
         
        }

      else if(num>secondLargest&&num!==firstLargest)
      {

          secondLargest=num

      }

    }
   
      return secondLargest===-Infinity ? null  : secondLargest

}

console.log(secondLargest([1,4,20,10,8]));
