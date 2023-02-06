let nums = [5,7,7,8,8,10], target = 8;

function lowerbound (arr,x){
    let ans = arr.length, low = 0 , high = arr.length-1;
    while(low <= high){
        let mid = low + Math.floor((high - low)/2);
        if(arr[mid] < x){
            low = mid+1;
        }else{
            ans = mid;
            high = mid-1;
        }
    }
    return ans;
}
function upperbound (arr,x){
    let ans = arr.length, low = 0 , high = arr.length-1;
    while(low <= high){
        let mid = low + Math.floor((high - low)/2);
        if(arr[mid] <= x){
            low = mid+1;
        }else{ 
            ans = mid;
            high = mid-1;
        }
    }
    return ans;
}
var searchRange = function(nums, target) {
    let lb = lowerbound(nums,target);
    if(lb >= nums.length || nums[lb] != target){
        return [-1,-1];
    }
    let ub = upperbound(nums,target);
    return [lb,ub-1];
};
console.log(searchRange (nums, target));