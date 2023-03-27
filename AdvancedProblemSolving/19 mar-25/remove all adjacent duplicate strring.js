/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let st = [];
    st.push(s[0]);
    for(let i = 1; i < s.length; i++) {
        if(st.length > 0 && st[st.length - 1] == s[i]) {
            st.pop();
            // continue;
        }else {
            st.push(s[i]);
        }
    }
    let ans = '';
    for (let i = 0; i < st.length; i++) {
        ans += st[i];
    }
    return ans;
};

/**
 * Question
 * You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
 */

/**
 * Example
 * Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
 */