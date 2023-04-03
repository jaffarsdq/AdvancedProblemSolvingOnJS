let result;

function post(r) {
    if(r == null) return;
    post(r.left);
    post(r.right);
    result.push(r.val);
}
var postorderTraversal = function(root) {
    result = [];
    post(root);
    return result;
};

/**
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 * Input: root = [1,null,2,3]
 * Output: [3,2,1]
 */