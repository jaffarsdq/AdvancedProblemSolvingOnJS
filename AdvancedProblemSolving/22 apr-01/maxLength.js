function f(r) {
    if(r == null) return 0;
    return Math.max (f(r.left), f(r.right)) + 1;
}
var maxDepth = function(root) {
    return f(root);
};

/**
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 */