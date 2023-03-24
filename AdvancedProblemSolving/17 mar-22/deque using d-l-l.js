function createNode(val) {
    return{
        data : val,
        prev : null,
        next : null
    };
}

class queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueueEnd(x) {
        let newNode  = createNode(x);
        if(this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeueEnd() {
        if(this.tail == null) return;
        let nextNode = this.tail.next;
        this.tail.next = null;
        this.tail = nextNode;
        if(this.tail == null) {
            this.tail = null;
        } 
    }

    dequeueFront() {
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
q.enqueueEnd(1);
q.enqueueEnd(2);
q.enqueueEnd(3);
console.log(q.getFront(), q.getBack());
