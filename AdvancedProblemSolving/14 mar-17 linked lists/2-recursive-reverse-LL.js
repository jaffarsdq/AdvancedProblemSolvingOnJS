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

function f(curr) {
    //basecase
    if(curr.next == null) return curr;
    //recursive call
    let newHead = f(curr.next);
    //self work
    curr.next.next = curr;
    curr.next = null;
    return newHead;
}
var reverseList = function(head) {
    if(head == null) return head;
    let curr = head;
    head = f(curr);
    return head;
};