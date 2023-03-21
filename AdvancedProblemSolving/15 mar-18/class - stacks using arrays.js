class stack {
    #arr;
    constructor() {
        this.#arr = [];
    }

    push(x) {
        this.#arr.push(x);
    }

    pop() {
        this.#arr.pop();
    }
    
    top() {
        return this.#arr[this.#arr.length-1];
    }
    display() {
        return this.#arr;
    }
}

const st = new stack();
st.push(10);
st.push(20);
console.log(st.top());
st.push(30);
st.push(40);
st.pop();
console.log(st.top())
console.log(st.display());