/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.com/problems/valid-parentheses/description/
 * 
 * Input: s = "()"
 * Output: true
 */

var isValid = function(s) {
    let st = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '{' || s[i] == '[' || s[i] == '(') {
            st.push(s[i]);
        }else {
            if(st.length == 0) return false;
            let cl = s[i];
            let top = st[st.length - 1];
            if(cl == '}' && top != '{') return false;
            if(cl == ']' && top != '[') return false;
            if(cl == ')' && top != '(') return false;
            st.pop();
        }
    }
    return st.length == 0;
}