function prevGreater(arr) {
    let n = arr.length;
    arr.reverse();
    let st = [];
    let output = [];
    st.push(0);
    for(let i = 1; i < n; i++) {
        while(st.length > 0 && arr[i] > arr[st[st.length - 1]]) {
            output[st[st.length - 1]] = arr[i];
            st.pop();
        }
        st.push(i);
    }
    while(st.length > 0) {
        output[st[st.length - 1]] = - 1;
        st.pop();
    }
    output.reverse();
    return output;
}

let arr = [3,5,10,1,2,9];
console.log(prevGreater(arr));