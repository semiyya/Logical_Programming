let ar=[20,7,23,12];
let i;
item=23;
let flag=0;
for( i=0;i<=3;i++)
{
    if(ar[i]==item)
    {
      flag=1;
      break;
     
    } 
}
     if(flag=1)
        {
    
       console.log("item found at",i+1,"position");
    } 
    else
    {
     console.log("item not found");
    }
