// Input: s = "egg", t = "add"
// Output: true

var isIsomorphic = function(s,t) {
    if(s.length != t.length) return false;
    let m1 = {} , m2 = {};
    for(let i=0; i< s.length ; i++){
        let charS = s[i];
        let charT = t[i];
        if(!m1[charS] && !m2[charT]){
            m1[charS] = charT;
            m2[charT] = charS;
        }else if(m1[charS] != charT && m2[charT] != charS){
            return false;
        }
    }
    return true;
 };

 let s = "egg", t = "add";
console.log(isIsomorphic(s,t));