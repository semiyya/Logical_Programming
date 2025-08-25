let num=341;
let lastdigit;
let reverse=0;
while(num>0)
{
lastdigit=num%10;
reverse=(reverse*10)+lastdigit;
num= Math.floor(num/10);
}

console.log("reverse=",reverse);

