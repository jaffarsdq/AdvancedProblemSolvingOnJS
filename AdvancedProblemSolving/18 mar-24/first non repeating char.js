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
    
    empty() {
        return (this.head == null && this.tail == null);
    }
}

function nonRepeating(A) {
		let b = "";
		let q = new queue;
		let freqMap = {};
		for(let i = 0; i < A.length; i++) {
			let currChar = A[i];
			if(freqMap[currChar]) {
				freqMap[currChar]++;
			} else {
				freqMap[currChar] = 1;
			}
            if (freqMap[currChar] == 1) q.enqueue(currChar);
			let front = q.getFront();
            
			while(!q.empty() && freqMap[front] > 1) {
				q.dequeue();
				front = q.getFront();
			}
			if(!q.empty()) {
				b += front;
			} else {
				b += '#';
			}
		}
		return b;
};


let A = "ababcdcd"
console.log(nonRepeating(A));