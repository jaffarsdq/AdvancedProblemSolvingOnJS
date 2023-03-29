// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
let nums = [1,2,3,4,5,6,7];
let k = 3;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    let i = 0, j = nums.length - 1;
    while(i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
    i = 0, j = k - 1;
    while(i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
    i = k, j = nums.length - 1;
    while(i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
    return nums;
};


console.log(rotate(nums, k));