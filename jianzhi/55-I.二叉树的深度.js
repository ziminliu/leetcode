/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function (root) {
    let maxDepth = 0;
    function traveTree(tree, depth) {
        if (tree) {
            traveTree(tree.left, depth + 1);
            traveTree(tree.right, depth + 1);
            if(depth > maxDepth){
                maxDepth = depth;
            }
        }
    }
    traveTree(root,1);
    return maxDepth;
};