let num1=34,num2=10;
let choice="/";
let result;


if(choice=="+")
{
    result=num1+num2;
    console.log(result);
}
else if(choice=="-")
{
    result=num1-num2;
    console.log(result);
}
else if(choice=="*")
{
    result=num1*num2;
    console.log(result);
}
else if(choice=="/")
    {
    result=(num1/num2);
    console.log(result);
}
else
{
    console.log("invalid")
}