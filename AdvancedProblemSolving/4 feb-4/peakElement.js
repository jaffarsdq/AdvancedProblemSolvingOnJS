var findPeakElement = function(nums) {
    let low = 0 , high = nums.length-1;
    while ( low < high) {
        let mid = low + Math.floor((high - low)/2);
        if (nums[mid] > nums[mid+1]) {
            high = mid;
        }else {
            low = mid+1;
        }
    }
    return low;
};

let nums = [1,2,3];
console.log(findPeakElement(nums));