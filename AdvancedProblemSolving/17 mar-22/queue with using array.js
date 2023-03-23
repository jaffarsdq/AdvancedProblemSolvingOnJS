class queue {
    #arr;
    constructor() {
        this.#arr = [];
    }

    push(x) {
        this.#arr.push(x);
    }

    pop() {
        let front = 0;
        this.#arr[front] = undefined;
        front++;
    }
    
    top() {
        return this.#arr[0];
    }
    display() {
        return this.#arr;
    }
}

const q = new queue();
q.push(10);
q.push(20);
console.log(q.top());
q.push(30);
q.push(40);
q.pop();
console.log(q.top())
console.log(q.display());