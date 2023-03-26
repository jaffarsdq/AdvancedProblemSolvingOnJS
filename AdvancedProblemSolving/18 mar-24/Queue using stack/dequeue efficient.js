class queue {
    constructor() {
        this.st1 = [];
        this.st2 = [];
    }

    dequeue(){
        const element = this.st2.pop();
        this.st1.pop();
        return element;
    }

    enqueue(x) {
        if(this.st1.length == 0) {
            this.st1.push(x);
        } else {

            while (this.st1.length > 0) {
                this.st2.push(this.st1.pop());
            }
            this.st1.push(x);
            while (this.st2.length > 0) {
                this.st1.push(this.st2.pop());
            }
        }
    }

    empty(){
        return ( this.st1.length === 0);
    }

    get back(){
        return this.st1[this.st1.length - 1];
    }

    get front(){
        return this.st1[0];
    }
}

let q = new queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log("front of the q is ", q.front);
console.log("back of the q is ",q.back);
q.dequeue();
q.dequeue();
// q.dequeue();
console.log("front of the q after dequeuing is ",q.front);
console.log(q.empty());