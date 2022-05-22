/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function (preorder, inorder) {
    let result = null;
    if (inorder.length == 0) {
        return null
    }
    result = new TreeNode(preorder[0])
    // 找到根节点 
    const midIndex = inorder.findIndex(i => i === preorder[0]);
    // 递归构建左右子树
    result.left = buildTree(preorder.slice(1, midIndex + 1), inorder.slice(0, midIndex));
    result.right = buildTree(preorder.slice(midIndex + 1, preorder.length), inorder.slice(midIndex + 1, inorder.length));
    return result;
};