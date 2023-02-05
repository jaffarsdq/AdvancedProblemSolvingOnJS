let nums = [1,0,3];
function missingNumber(nums){
    let result = nums.length;
    for (let i = 0; i < nums.length; i++) {
        result = result + i - nums[i];
    }
    return result;
}

console.log(missingNumber(nums));