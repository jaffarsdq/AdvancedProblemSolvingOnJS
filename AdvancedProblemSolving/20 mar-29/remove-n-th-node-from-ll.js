/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head == null) return head;
    if(head.next == null && n == 1) return null;
    let hi = head, lo = head;
    let count = 1;
    while(count < n+1 && hi != null) {
        hi = hi.next;
        count++;
    }
    if(hi == null) {
        let newHead = head.next;
        head.next = null;
        return newHead;
    }
    while(hi.next != null) {
        hi = hi.next;
        lo = lo.next;
    }
    let connect = lo.next.next;
    let nodeRemoved = lo.next;
    lo.next = connect;
    nodeRemoved.next = null;
    return head;
};

/**
 * Given the head of a linked list, 
 * remove the nth node from the end 
 * of the list and return its head. 
 */

/**
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 */