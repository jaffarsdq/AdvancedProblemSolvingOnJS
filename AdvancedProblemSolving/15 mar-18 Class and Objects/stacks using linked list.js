class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    push(value) {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  
    pop() {
      if (!this.top) {
        return null;
      }
      const poppedNode = this.top;
      this.top = this.top.next;
      this.size--;
      return poppedNode.value;
    }
  
    peek() {
      if (!this.top) {
        return null;
      }
      return this.top.value;
    }
  
    get isEmpty() {
      return this.size === 0;
    }
  }
  

let st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.pop();
st.pop();
console.log(st.isEmpty);
console.log(st.peek());