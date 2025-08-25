let array=[2,45,12,10,8];
let i;
let searchkey=50;
let flag=0;
for(i=0;i<=4;i++)
 {
    if(searchkey==array[i])
    {
        flag=1;
        break;
    }


 }
 if(flag==1)
 {
    console.log("itemfound",i+1,"th position");
 }
 else{
    console.log("item not found");
 }


