var mySqrt = function(x) {
    if (x == 0) return x;
    let low = 1, high = x-1;
    let ans = 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (mid*mid > x) {
            high = mid -1;
        }else {
            ans = mid;
            low = mid +1;
        }
    }
    return ans;
};

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.