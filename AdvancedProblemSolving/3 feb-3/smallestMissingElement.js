let nums = [0,6,9,11,15];

//Time Complexity -> O(n)
//Linear search

function small(nums){
    let expectedElement = 0;
    for(let i=0 ; i<nums.length-1 ; i++){
        if(nums[i] == expectedElement){
            expectedElement++;
        }else{
            return i;
        }
    }
}

console.log(small(nums));

//Merge Sort
function tiny(nums) {
    if(nums[0] == !0) return 0;
    let low = 0 , high = nums.length-1;
    let ans;
    while(low <= high){
        let mid = low + Math.floor((high - low)/2 );
        if(nums[mid] == mid){
            low = mid+1;
        }else{
            ans = mid;
            high = mid-1;
        }
    }
    return ans;
}
console.log(tiny(nums));
