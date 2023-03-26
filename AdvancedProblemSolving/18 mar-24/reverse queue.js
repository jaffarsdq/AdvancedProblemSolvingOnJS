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
        this.st = [];
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
        let deq = this.head.data;
        let nextNode = this.head.next;
        this.head.next = null;
        this.head = nextNode;
        if(this.head == null) {
            this.tail = null;
        } 
        return deq;
    }

    getFront() {
        if(this.head == null) return;
        return this.head.data;
    }

    getBack() {
        if(this.head == null) return;
        return this.tail.data;
    }
    
    empty() {
        return (this.head == null && this.tail == null);
    }

    reverseQueue() {
        while(!this.head == null && this.tail == null) { 
            this.st.push(thsi.queue.dequeue());
        }
        while(this.st.length != 0) {
            this.queue.enqueue(this.st.pop());
        }
    }
}





let q = new queue;
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log(q.getFront());
q.reverseQueue();
console.log(q.getFront());
