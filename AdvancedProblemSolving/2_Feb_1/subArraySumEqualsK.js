let nums = [1,6,2,-5,4,3,-7,7,-4],k=3;
sumEqualsK(nums);

function sumEqualsK(nums) {
    let ans = 0;
    let map = {};
    let prefixSum = nums[0];
    map[nums[0]] = 1;
    if(prefixSum == k) ans++;
    for(let i = 1; i < nums.length; i++){
        prefixSum += nums[i];
        if(map[prefixSum-k]){
            ans += map[prefixSum-k];
        }
        if(prefixSum == k) ans++;

        if(map[prefixSum]){
            map[prefixSum]++;
        }else{
            map[prefixSum] = 1;
        }
    }
    console.log(ans);
}