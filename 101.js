/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 比较谁 就把谁放在递归参数里。 这个题是比较叶子节点的值 所以需要把叶子节点放在递归函数参数里。
var isSymmetric = function (root) {
    if (!root) {
        return false;
    }
    return isSymmetricLeaf(root.left, root.right);

}

function isSymmetricLeaf(left, right) {
    if (!left && !right) {
        return true;
    }
    if (!left || !right) {
        return false;
    }
    if (left.val != right.val) {
        return false;
    }
    return isSymmetricLeaf(left.left, right.right) && isSymmetricLeaf(left.right, right.left);
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


