var arrayPairSum = function(nums) {
    let result = 0;
    nums.sort((a, b) => a-b);
    for (let j = 0; j < nums.length-1; j += 2) {
        result += nums[j];
    }
    return result;
};

let nums = [1,2,3,4,5,6,7,8];
console.log(arrayPairSum(nums));
