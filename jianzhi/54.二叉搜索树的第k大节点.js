/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function (root, k) {
    // 中序遍历
    function traveTree(tree, queen) {
        if (tree) {
            traveTree(tree.right, queen);
            queen.push(tree.val);
            traveTree(tree.left, queen);
        }
    }
    let stark = [];
    traveTree(root, stark);
    console.log(stark);
    return stark[k - 1];
};