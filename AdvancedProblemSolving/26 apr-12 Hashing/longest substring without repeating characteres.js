/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let mp = {};
    let start = 0, end = 0;
    let ans = 0;
    while(end < s.length) {
        if(!mp[s[end]]) {
            mp[s[end]] = 1;
        } else {
            mp[s[end]]++;
        }
        while(mp[s[end]] > 1) {
            mp[s[start]]--;
            start++;
        }
        ans = Math.max(ans, end - start + 1);
        end++;
    }
    return ans;
};