/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */
var BSTIterator = function (root) {
  // 中序遍历
  this.stack = [];
  this.current = -1;
  function dfs(root, stack) {
    if (root) {
      dfs(root.left, stack);
      stack.push(root);
      dfs(root.right, stack);
    }
  }
  dfs(root, this.stack);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  // this.current += 1;
  return this.stack[++this.current].val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  if (this.current < this.stack.length - 1) {
    return true;
  } else {
    return false;
  }
};
/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
