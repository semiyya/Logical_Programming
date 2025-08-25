


function sorting(arr)
{
    for(i=0;i<arr.length;i++)
     {
        for(j=i+1;j<arr.length;j++)
        {
            let temp=0;
            if(arr[j]>arr[i]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
     }
     return arr;

}
let arr=[5,1,8,2];
console.log(sorting(arr));