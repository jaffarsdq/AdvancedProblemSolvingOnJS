function f(r1, r2) {
    if(r1 == null && r2 == null) return true;
    if(r1 == null) return false;
    if(r2 == null) return false;
    return (r1.val == r2.val) && f(r1.left, r2.right) && f(r1.right, r2.left);
}
var isSymmetric = function(root) {
    return f(root, root);
};

/**
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 */