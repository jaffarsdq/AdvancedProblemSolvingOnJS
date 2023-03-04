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
var middleNode = function(head) {
    if (head == null) return null;
    let fast = head;
    let slow = head;
    while (fast.next != null && fast.next.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (fast.next == null) return slow
    else return slow.next;
};

/* Input: head = [1,2,3,4,5]
*   Output: [3,4,5]
*   Explanation: The middle node of the list   *   is node 3.
*/