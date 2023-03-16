function createNode (value) {
    return {
        data : value,
        next : null,
        prev : null
    }
}

function createAtHead (head, data) {
    if (head == null) return createNode(data);
    let newNode = createNode (data);
    newNode.next = head;
    head.prev = newNode;
    head = newNode;
    return head;
}

function removeAtHead (head) {
    if (head == null) return null;
    if (head.next == null) return null;
    let nextNode = head.next;
    head.next = null;
    nextNode.prev = null;
    head = nextNode;
    return head;
}

function createAtTail (head, data) {
    if (head == null) {
        return createAtHead(head, data);
    }
    let temp = head;
    while (temp.next != null) {
        temp = temp.next;
    }
    let newNode = createNode(data);
    temp.next = newNode;
    temp.prev = temp;
    return head;
}

function removeAtTail (head) {
    if (head == null) return null;
    if (head.next == null) return null;
    let temp = head;
    while (temp.next.next != null) {
        temp = temp.next;
    }
    let tail = temp.next;
    tail.prev = null;
    temp.next = null;
    return head
}


function display (head) {
    let temp = head;
    let result = "";
    let count = 0;
    while (temp != null) {
        result += temp.data + " <-> ";
        temp = temp.next;
        count++;
    }
    console.log (result + "x");
    console.log (count);
    
}

let head = null;
// You can only add or delete a  Node from head because it's  linked list//
// that's why we accessing Node from head//

head = createAtHead (head, 0);
head = createAtHead (head, 10);
head = createAtHead (head, 20);
head = createAtHead (head, 30);
head = createAtHead (head, 40);
head = removeAtHead (head);

display (head);