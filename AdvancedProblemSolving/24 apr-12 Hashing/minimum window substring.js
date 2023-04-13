/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s.length < t.length) return "";
    let mt = {};
    let ms = {};
    //preparing freq map of t
    for(let i = 0; i < t.length; i++) {
        if(!mt[t[i]]) {
            mt[t[i]] = 1;
        } else {
            mt[t[i]]++;
        }
    }

    let ans = Infinity;
    let ans_idx = -1;
    let en = 0, st = 0;
    let len = 0;
    while(en < s.length) {
        //expansion
        if(!ms[s[en]]) {
            ms[s[en]] = 1;
        } else {
            ms[s[en]]++;
        }
        if(ms[s[en]] <= mt[s[en]]) {
            len++;
        }
        if(len == t.length) {
            //srink
            while(!mt[s[st]] || ms[s[st]] > mt[s[st]]) {
                ms[s[st]]--;
                st++;
            }
            if(en - st + 1 < ans) {
                ans = en - st + 1;
                ans_idx = st;
            }
        }
        en++;
    }
    if(ans_idx == -1) return "";
    let result = "";
    for(let i = 0; i < ans; i++) {
        result += s[ans_idx + i];
    }
    return result;
};