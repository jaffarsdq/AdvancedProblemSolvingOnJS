/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let sum = 0;
    for(let i = 0; i < matrix[0].length; i++) {
        sum = 0;
        for(let j = 0; j < matrix.length; j++) {
            if(matrix[j][i] == 0) {
                sum = 0;
            }else {
                sum += Number(matrix[j][i]);
                matrix[j][i] = sum;
            }
        }
    }
    let result = -Infinity;
    let maximum = 0;
    for(let i = 0; i < matrix.length; i++) {
        // console.log(matrix[i]);
        maximum = largestRectangleArea(matrix[i]);
        result = Math.max(result, maximum);
    }
    return result;
}        

function largestRectangleArea(heights) {
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

matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];

console.log(maximalRectangle(matrix));