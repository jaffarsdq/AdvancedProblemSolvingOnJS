class stack {
    constructor () {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        this.queue1.push(x);
    }

    pop() {
        if(this.queue1.length == 0) return undefined;
        while(this.queue1.length > 1) {
            this.queue2.push(this.queue1.pop());
        }
        this.queue1.pop();
        const element = this.queue1.pop();
        while(this.queue2.length > 0) {
            this.queue1.push(this.queue2.pop());
        }
        return element;
    }

    top() {
        return this.queue1[this.queue1.length - 1];
    }

    empty() {
        return this.queue1.length == 0;
    }
}

let st = new stack;

st.push(1);
st.push(2);

console.log(st.top());
st.pop();

console.log(st.top());

console.log(st.empty());