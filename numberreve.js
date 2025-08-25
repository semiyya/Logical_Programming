function reverse(num)
{
    let rev=0;
    while(num!==0)
    {
    lastdigi=num%10;
  
    rev=rev*10+lastdigi;
    num=Math.floor(num/10);
    }
    return rev;
}
console.log(reverse(123));