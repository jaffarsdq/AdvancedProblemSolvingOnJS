/**
 * @param {https://leetcode.com/problems/longest-consecutive-sequence/description/} nums 
 *  Input: nums = [100,4,200,1,3,2]
 *  Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */
var longestConsecutive = function(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(!map[nums[i]]) map[nums[i]] = true;
    }
    let ans = 0;
    let keys = Object.keys(map);
    for(let j = 0; j < keys.length; j++) {
        let curr = Number(keys[j]);
        if(map[curr - 1]) continue;
        let i = 0;
        while(map[curr + i]) i++;
        ans = Math.max(ans, i);
    }
    return ans;
};