function addAtBottom(st, x) {
    //creating a temporary stack to store to
    //elements already present in the og stack
    let temp = [];
    //let's push el from the og stack to temp stack and pop from the og stack
    while(!st.length == 0) {
        temp.push(st[st.length - 1]);
        st.pop();
    }
    //push the el or add at bottom given element
    st.push(x);
    //then push el from the temp stack 
    while(!temp.length == 0) {
        st.push(temp[temp.length - 1]);
        temp.pop();
    }
    return st;

}

function reverse(st) {
    if(st.length == 0) return;
    let el = st[st.length - 1];
    st.pop();
    reverse(st);
    addAtBottom(st, el);
}

let st = [1,2,3,4];

reverse(st);
console.log (st);