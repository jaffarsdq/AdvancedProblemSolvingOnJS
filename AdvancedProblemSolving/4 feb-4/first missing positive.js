// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.

let nums = [1,2,0];

var firstMissingPositive = function(nums) {
    let arr = nums.sort((a,b) => a-b);
    let ans = 1;
    for (let i = 0; i < arr.length; i++) {
        if (ans == arr[i]){
            ans += 1;        
        }
    }
    return ans;
};


console.log(firstMissingPositive(nums));