function sumOfNumber(num)
{
    let sum=0;
    while(num>0)
    {
        digit=num%10;
        sum=sum+digit;
        num=Math.floor(num/10)

    }
    return sum
}
let num=123;
console.log(sumOfNumber(num));