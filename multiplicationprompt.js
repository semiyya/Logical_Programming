
let num=prompt("enter the number");
function multiplication(num)
{
   
    let table="";
    
    for(let i=1;i<=10;i++)
    {
      
     let result=i*num;
      table+=i+"x"+num+"="+result+"\n";

      
    }
     alert(table);
    
      
    
  
    
    
    
}
multiplication(num);

