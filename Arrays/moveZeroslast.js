// function moveZero(array)

// {

//     let index=0;
    

//     for(let i=0;i<=array.length;i++)
//     {

//         if(array[i]!==0)

//             {

//             let temp=array[i]

//             array[i]=array[index]
//             array[index]=temp

//             index++

//             }

//     }
//   return array
// }

// console.log(moveZero([1,2,4,0,5,0]));


function moveZero(array)
{

let num=0;
let temp;
let newArray=[]
for(let i=0;i<array.length;i++)
{

if(array[i]!==0)
{

    temp=array[i]
    array[i]=array[num]
    array[num]=temp
   num++
   
}

}
return array


}
console.log(moveZero([2,0,8,10,0]));
