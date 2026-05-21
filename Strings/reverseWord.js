function reverseWord(sentance)
{ 
  return sentance.split(' ').map(word=>word.split('').reverse().join('')).join(' ')
    
}
console.log(reverseWord("hello world"));
