let arr = [2,2,2];

function validSubArray(arr) {
    let count = 0;
    let st = [];
    st.push(arr.length - 1);
    for(let i = arr.length - 1; i >= 0; i--) {
        while(st.length > 0 && arr[i] <= arr[st.length - 1]) {
            st.pop();
        }
            if(st.length == 0) {
                count += arr.length - i;
            } else {
                count += st.length - 1 - i;
            }
        st.push(i);
    }
    return count;
}

console.log(validSubArray(arr));