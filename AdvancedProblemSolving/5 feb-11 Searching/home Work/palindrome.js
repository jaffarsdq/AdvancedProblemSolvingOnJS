// leetcode

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s =  s.replace(/[^a-z0-9]/gi,"")
    let l = 0;
    let r = s.length - 1;
    while (l <= r){
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        l++;
        r--;
    }
    return true;
};

/*Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome */
