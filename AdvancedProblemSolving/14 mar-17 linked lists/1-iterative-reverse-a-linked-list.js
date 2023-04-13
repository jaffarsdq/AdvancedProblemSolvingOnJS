/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null) return head;
    let curr = head;
    let prev = null;
    let nextAdjacent = curr.next;
    while(curr != null){
        curr.next = prev;
        prev = curr;
        curr = nextAdjacent;
        if (curr != null){
            nextAdjacent = curr.next;
        }
    }
    head = prev;
    return head;
};