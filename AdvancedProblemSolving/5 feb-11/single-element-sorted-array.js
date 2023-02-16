/* You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

 *   Return the single element that appears only once.

 *   Your solution must run in O(log n) time and O(1) space.
*/

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2


var singleNonDuplicate = function(nums) {
    if(nums.length == 1) return nums[0]; 
    let n = nums.length;
    let low = 0 , high = n - 1;
    while (low <= high) {
        let mid = low + Math.floor ((high - low) / 2);
        if (mid+1 >= n && nums[mid-1] != nums[mid]) {
            return nums[mid];
        }
        if (mid-1 < 0 && nums[mid+1] != nums[mid]) {
            return nums[mid];
        }
        if (nums[mid-1] != nums[mid] && nums[mid+1] != nums[mid]) {
            return nums[mid];
        }
        if (nums[mid] == nums[mid-1]) {
            if (mid %2 == 0) {
                high = mid-2;
            }else {
                low = mid+1;
            }
        }else {
            if (mid %2 == 0) {
                low = mid+2;
            }else {
                high = mid-1;
            }
        }
    }
};

// Input
let nums = [1,1,2,3,3,4,4,8,8];
// Output
console.log(singleNonDuplicate(nums));