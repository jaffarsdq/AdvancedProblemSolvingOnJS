// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

let nums1 = [4,9,5], nums2 = [9,4,9,8,4];

var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a-b);
    nums2.sort((a, b) => a-b);
    let i = 0, j = 0;
    let c = [];
    while (i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]){
            i++;
        } else if(nums1[i] > nums2[j]) {
            j++;
        } else if(nums1[i] == nums2[j]){
            if (c[nums1[i]]) {
                break;
            } else {
            c.push(nums1[i]);
            i++;
            j++;
            }
        }
    }
    map = {};
    for (let ans of c) {
        if ( map [ans]) {
            map[ans] += 1;
        } else if(!map[ans]){
            map[ans] = 1;
        } else if (map[ans] > 1) {
            delete[map[ans]];
        }
    }
    return  Object.keys(map);
};

console.log(intersection(nums1, nums2));