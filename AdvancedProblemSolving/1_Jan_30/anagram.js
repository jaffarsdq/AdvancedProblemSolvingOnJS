let s = "anagram", t = "nagaram";

function anagram(s,t) {
    if(s.length != t.length) return false;
    //Mapping s
    let map = {};
    for(let i=0; i<s.length; i++){
        let keys = s[i];
        if(map[keys]){
            map[keys]++; 
        }else{
            map[keys] = 1;
        }
    }
    //Demap s using t
    for(let i=0; i<t.length; i++){
        let keys = t[i];
        if(map[keys]){
            map[keys]--; 
            if(map[keys] == 0) delete map[keys];
        }else{
                return false;
        }
    }
    return Object.values(map).length == 0;
}

console.log(anagram(s,t));