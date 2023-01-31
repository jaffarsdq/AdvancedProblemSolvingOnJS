let strs = ["eat","tea","tan","ate","nat","bat"];
Output: [["bat"],["nat","tan"],["ate","eat","tea"]];

function groupAnagrams(strs) {
    let map = {};
    for(let i=0; i< strs.length; i++){
        let currString = strs[i];
        let sortedString = currString.split("").sort().join();
        if(map[sortedString]){
            map[sortedString].push(currString);
        }else{
            map[sortedString] = [currString];
        }
    }
    return Object.values(map);
}

console.log(groupAnagrams(strs));