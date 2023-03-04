function Node (value) {
    return {
        data : value,
        next : null
    }
}

function createAtHead (head, data) {
    let newNode = Node (data);
    newNode.next = head;
    head = newNode;
    return head;
}

function removeAtHead (head) {
    let temp = head;
    head = temp.next;
    temp.next = null;
    return head;
}

function createAtTail (head, data) {
    let temp = head;
    if (temp == null) {
        return createAtHead(head, data);
    }
    while (temp.next != null) {
        temp = temp.next;
    }
    let newNode = Node (data);
    temp.next = newNode;
    return head
}

function createAtIndex (head, data, i) {
    let temp = head;
    if (temp == null) {
        return removeAtHead(head, data);
    }
    let count = 0;
    while (count < i-1) {
        temp = temp.next;
        count += 1;
    }
    let prev = temp.next;
    let newNode = Node (data);
    temp.next = newNode;
    newNode.next = prev;
    return head
}

function removeAtIndex (head, i) {
    let temp = head;
    if (temp == null) {
        return head;
    }
    if (temp.next == null) {
        return null;
    }
    let count = 0;
    while (count < i-1) {
        temp = temp.next;
        count += 1;
    }
    let remove = temp.next;
    let nextofremove = temp.next.next;
    temp.next = nextofremove;
    remove.next = null;
    return head;
}

function removeAtTail (head) {
    if (head == null) {
        return null;
    }
    while (head.next == null) {
        return null;
    }
    let temp = head;
    while (temp.next.next != null) {
        temp = temp.next;
    }
    temp.next = null;
    return head
}

function display (head) {
    let temp = head;
    let result = "";
    let count = 0;
    while (temp != null) {
        result += temp.data + " -> ";
        temp = temp.next;
        count++;
    }
    console.log (result + "x");
    console.log (count);
    
}

let head = null;
// You can only add or delete a node from head because it's Singly linked list//
// that's why we accessing node from head//

head = createAtHead (head, 0);
head = createAtHead (head, 10);
head = createAtHead (head, 20);
head = createAtHead (head, 30);
head = createAtHead (head, 40);
head = createAtIndex (head, 99, 2);
head = removeAtIndex (head, 2);

display (head);