let result;

function pre(r) {
    if(r == null) return;
    result.push(r.val);
    pre(r.left);
    pre(r.right);
}
var preorderTraversal = function(root) {
    result = [];
    pre(root);
    return result;
};
/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 * Input: root = [1,null,2,3]
 * Output: [1,2,3]
 */