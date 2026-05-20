

function groupAnogram(array)
{
    let map={}
    for(let word of array)
    {
        let key=word.split("").sort().join("")
        if(!map[key])
        {
            map[key]=[]
           

        }
         map[key].push(word)
        
    }
    return Object.values(map)
}
console.log(groupAnogram(["tan","eat","tea","ate","nat","ant"]))

