function moveZero(array)

{

    let index=0;
    

    for(let i=0;i<=array.length;i++)
    {

        if(array[i]!==0)

            {

            let temp=array[i]

            array[i]=array[index]
            array[index]=temp

            index++

            }

    }
  return array
}

console.log(moveZero([1,2,4,0,5,0]));
