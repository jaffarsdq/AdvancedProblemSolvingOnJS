// https://leetcode.com/problems/median-of-two-sorted-arrays/

/* ->Example 1:

* Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
* Explanation: merged array = [1,2,3] and median is 2.

    ->Example 2:

* Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
* Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5. */



var findMedianSortedArrays = function(a, b) {
    let c = [];
    let i = 0,j = 0;
    while (i < a.length && j < b.length) {
        if(a[i] < b[j]) {
            c.push(a[i]);
            i++;
        }else {
            c.push(b[j]);
            j++;
        }
    }
    while (i < a.length ) {
            c.push(a[i]);
            i++;
    }
    while ( j < b.length) {
            c.push(b[j]);
            j++;
    }
    var output = 0
    let median = c.length / 2;
    if (c.length % 2 == 0) {
        output = (c[median-1] + c[median]) / 2;
    } else {
        output = c[Math.floor(median)];
    }
    return output;
};
