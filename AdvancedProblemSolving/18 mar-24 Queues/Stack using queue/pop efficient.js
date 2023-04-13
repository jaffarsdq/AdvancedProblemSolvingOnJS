class stack {
    constructor () {
        this.queue1 = [];
        this.queue2 = [];
    }

    pop() {
        const element = this.queue1.pop();
        this.queue1.pop();
        return element;
    }

    push(x) {
        if(this.queue1.length == 0) {
            this.queue1.push(x);
        } else {
            while(this.queue1.length > 0) {
                this.queue2.push(this.queue1.pop());
            }
            this.queue1.push(x);
            while(this.queue2.length > 0) {
                this.queue1.push(this.queue2.pop());
            }
        }
    }

    top() {
        return this.queue1[this.queue1.length - 1];
    }

    empty() {
        return this.queue1.length == 0;
    }
}

let st = new stack;

// st.push(1);
st.push(2);
st.push(3);
console.log(st.top());
st.pop();

console.log(st.top());

console.log(st.empty());