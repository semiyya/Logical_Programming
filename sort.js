let a=[10,2,19,9,6];
let i,j;
let temp=0;
console.log("sorted array is:");

for(i=0;i<=4;i++)
{
    for(j=i+1;j<=4;j++)
    {
        if(a[i]>a[j])
        {
        temp=a[i];
        a[i]=a[j];
        a[j]=temp;
    }
    
}


console.log(a[i]);

}
