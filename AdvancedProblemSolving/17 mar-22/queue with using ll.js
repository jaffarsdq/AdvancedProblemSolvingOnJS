function createNode(val) {
    return{
        data : val,
        next : null
    };
}

class queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(x) {
        let newNode  = createNode(x);
        if(this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        if(this.head == null) return;
        let nextNode = this.head.next;
        this.head.next = null;
        this.head = nextNode;
        if(this.head == null) {
            this.tail = null;
        } 
    }

    getFront() {
        if(this.head == null) return;
        return this.head.data;
    }

    getBack() {
        if(this.head == null) return;
        return this.tail.data;
    }
}

let q = new queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.getFront(), q.getBack());
q.getBack();
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.getFront(), q.getBack());