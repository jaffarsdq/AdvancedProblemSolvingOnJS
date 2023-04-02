/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = null;
    let temp1 = l1;
    let temp2 = l2;
    let carry = 0;
    let resHead = null;
    while(temp1 != null || temp2 != null) {
        let d1 = (temp1 != null) ? temp1.val : 0;
        let d2 = (temp2 != null) ? temp2.val : 0;
        let sum = d1 + d2 + carry;
        let digit = sum % 10;
        carry = Math.floor(sum / 10);
        let newNode = new ListNode (digit);
        if(resHead == null) {
            res = newNode;
            resHead = res;
        }else {
            res.next = newNode;
            res = newNode;
        }
        if(temp1 != null) temp1 = temp1.next;
        if(temp2 != null) temp2 = temp2.next;
    }
    if(carry != 0) {
        let node = new ListNode (carry);
        res.next = node;
    }
    return resHead;
};

/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 */