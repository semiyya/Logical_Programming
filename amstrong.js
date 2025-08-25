function amstrongNumber()
{
    let sum=0;
    while(num>0)
    {
        digit=num%10;
        sum=sum+digit**3;
        num=Math.floor(num/10);
        
    }
    return sum;
}
let num=123;
console.log(amstrongNumber(num))