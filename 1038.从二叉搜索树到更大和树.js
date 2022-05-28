/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 *
 * [1038] 从二叉搜索树到更大和树
 */

// @lc code=start
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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  // 逆中序遍历
  let sum = 0;
  function dfs(root) {
    if (root) {
      dfs(root.right);
      root.val += sum;
      sum = root.val;
      dfs(root.left);
    }
  }
  dfs(root);
  return root;
};
// @lc code=end
