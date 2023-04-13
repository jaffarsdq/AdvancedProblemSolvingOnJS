/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let st = [];
    let n = heights.length;
    st.push(0);
    let ans = -1;
    for(let i = 1; i < n; i++) {
        while(st.length > 0 && heights[i] < heights[st[st.length - 1]]) {
            let x = st[st.length - 1];
            st.pop();
            ans = Math.max(ans, heights[x] * (i - (st.length > 0 ? st[st.length - 1] : -1) - 1 ));
        }
        st.push(i);
    }
        while(st.length > 0) {
            let x = st[st.length - 1];
            st.pop();
            ans = Math.max(ans, heights[x] * (n - (st.length > 0 ? st[st.length - 1] : -1) -1 ));
        }
    return ans;
};

/**
 * Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
 */


/**
 * Example--->
 * Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
 */