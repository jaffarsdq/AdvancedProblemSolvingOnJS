//Brute force
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for(let i = 0; i < nums1.length; i++) {
        let j = nums2.indexOf(nums1[i]);
        console.log(j);
        let hasGreater = false;
        for(j; j < nums2.length; j++){
            if(nums2[j] > nums1[i]){
                hasGreater = true
                result.push(nums2[j])
                break
            }
        }

        if(!hasGreater){
            result.push(-1)
        }
    }
    return result;
};