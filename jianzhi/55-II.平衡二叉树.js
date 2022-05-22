/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function (root) {
    let result = true;
    // 平衡因子
    function traveBalance(tree) {
        if (tree) {
            const leftDepth = traveBalance(tree.left) + 1;
            const rightDepth = traveBalance(tree.right) + 1;
            console.log(tree.val, leftDepth, rightDepth)
            if (Math.abs(leftDepth - rightDepth) > 1) {
                result = false
            };
            return Math.max(leftDepth, rightDepth)
        }
        // 返回子树的深度
        return 0;
    }
    traveBalance(root, 0);
    return result;
};