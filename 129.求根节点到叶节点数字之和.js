/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;
  //  中序遍历
  function dfs(root, strPath) {
    if (root) {
      dfs(root.left, strPath + root.val);
      dfs(root.right, strPath + root.val);
      if (!root.left && !root.right) {
        sum += Number(strPath + root.val);
      }
    }
  }
  dfs(root, "");
  return sum;
};
// @lc code=end
