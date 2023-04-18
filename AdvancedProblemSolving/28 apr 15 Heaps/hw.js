class MaxHeap {
    #arr;
    constructor() {
        this.#arr = [];
    }
    swap(i, j) {
        let temp = this.#arr[i];
        this.#arr[i] = this.#arr[j];
        this.#arr[j] = temp;
    }
    upheapify(ci) {
        while(ci > 0) {
            let pi = Math.floor((ci - 1)/2);
            if(this.#arr[ci] > this.#arr[pi]) {
                this.swap(ci, pi);
            } else{
                break;
            }
            ci = pi;
        }
    }
    downheapify(pi) {
        while(pi < this.#arr.length) {
            let lc = (2 * pi + 1);
            let rc = (2 * pi + 2);
            let result = pi;
            if(lc < this.#arr.length && this.#arr[lc] > this.#arr[result]) {
                result = lc;
            }
            if(rc < this.#arr.length && this.#arr[rc] > this.#arr[result]) {
                result = rc;
            }
            if(pi == result) break;
            this.swap(pi, result);
            pi = result;
        }
    }
    insert(x) {
        this.#arr.push(x);
        this.upheapify(this.#arr.length - 1);
    }
    get() {
        if(this.#arr.length > 0) {
            return this.#arr[0];
        } else {
            return undefined;
        }
    }
    remove() {
        this.swap(0, this.#arr.length - 1);
        this.#arr.pop();
        this.downheapify(0);
    }
    display() {
        console.log(this.#arr);
    }
}

const hp = new MaxHeap();
hp.insert(10);
hp.insert(2);
hp.insert(6);
hp.insert(19);
hp.insert(3);
hp.insert(4);
hp.display();
hp.insert(20);
hp.display();
hp.remove();
hp.remove();
hp.display();