/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let node = new ListNode(0);
    let temp = node;

    while(l1 != null && l2 != null) {
        if(l1.val < l2.val) {
            temp.next = l1;
            l1 = l1.next;
            temp = temp.next;
            temp.next = null;
        } else {
            temp.next = l2;
            l2 = l2.next;
            temp = temp.next;
            temp.next = null;
        }
    }
    if(l1 != null) temp.next = l1;
    if(l2 != null) temp.next = l2;
    return node.next;
};

/**
 * You are given the heads of two
 * sorted linked lists list1 and
 *  list2.
 * Merge the two lists in a one  sortedlist. 
 * The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

/**
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 */