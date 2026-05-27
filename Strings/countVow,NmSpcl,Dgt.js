function checkChar(str)

{

    let vowel=0;
    let digit=0;
    let consonent=0;
    let spclchar=0;



   for(let char of str)
   {
      if("aeiouAEIOU".includes(char))
      {

            vowel++
      }
      else if((char>="a"&&char<="z")||(char>="A"&&char<="Z"))
      {
        consonent++
      }

      else if(char>="0"&&char<="9")
      {
        digit++
      }
else{

    spclchar++
}

   }

   return {vowel:vowel,consonent:consonent,digit:digit,specialchar:spclchar}

}
console.log(checkChar("123@semiyya"));
