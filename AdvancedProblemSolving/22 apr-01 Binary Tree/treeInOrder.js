let result;

function Inorder(r) {
    if(r == null) return;
    Inorder(r.left);
    result.push(r.val);
    Inorder(r.right);
}
var inorderTraversal = function(root) {
    result = [];
    Inorder(root);
    return result;
};

/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * Input: root = [1,null,2,3]
Output: [1,3,2]
 */