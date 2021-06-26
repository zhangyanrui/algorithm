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
 var isSymmetric = function(root) {
    if (!root) {
        return false;
    }
    return check(root.left, root.right);
    
}

function check(node1, node2) {
    let queue = [];
    queue.push(node1);
    queue.push(node2);

    while (queue.length > 0) {
        let a = queue.shift();
        let b = queue.shift();
        // important！
        if (!a && !b) {
            continue;
        }
        if (!a || !b) {
            return false;
        }
        if (a.val != b.val) {
            return false;
        }
        queue.push(a.left);
        queue.push(b.right);
        
        queue.push(b.left);
        queue.push(a.right);
    }
    return true;
}