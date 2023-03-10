//Input: nums = [-1,0,3,5,9,12], target = 9
//Output: 4

let nums = [-1,0,3,5,9,12], target = 9;

function binarySearch(nums,target){
    let low = 0 , high = nums.length-1;
    while(low <= high){
        let mid = low + Math.floor ((high-low)/2);
        if(nums[mid] == target) return mid;
        if(nums[mid] < target){
            low = mid + 1;
        }else{
            high = mid - 1; 
        }
    }
    return -1;
}

console.log(binarySearch(nums,target));