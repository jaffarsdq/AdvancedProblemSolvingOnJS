class Node {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class Deque {
    constructor() {
      this.head = null;
      this.tail = null;
      this.count = 0;
    }
    
    get length() {
      return this.count;
    }
    
    isEmpty() {
      return this.count === 0;
    }
    
    pushFront(val) {
      const node = new Node(val);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      this.count++;
    }
    
    pushBack(val) {
      const node = new Node(val);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
      this.count++;
    }
    
    popFront() {
      if (this.isEmpty()) {
        return undefined;
      }
      const val = this.head.val;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.count--;
      return val;
    }
    
    popBack() {
      if (this.isEmpty()) {
        return undefined;
      }
      const val = this.tail.val;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.count--;
      return val;
    }
    
    getFront() {
      return this.head ? this.head.val : undefined;
    }
    
    getBack() {
      return this.tail ? this.tail.val : undefined;
    }
  }
  let q = new Deque();
  q.pushFront(1);
  q.pushFront(2);
  q.pushBack(3);
  q.pushBack(4);
  console.log(q.length);
  console.log(q.isEmpty());
  console.log(q.getFront(), q.getBack());
  q.popFront();
  q.popFront();
  q.popBack();
  q.popBack();
  console.log(q.length);
  console.log(q.isEmpty());
  console.log(q.getFront(), q.getBack());