/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  // BFS  队列最后一个节点
  let result = [];
  if (!root) return [];
  let currentQueue = [root];
  let anotherQueue = [];
  let curNode;
  while (currentQueue.length || anotherQueue.length) {
    curNode = currentQueue.shift();
    if (curNode) {
      if (curNode.left) {
        anotherQueue.push(curNode.left);
      }
      if (curNode.right) {
        anotherQueue.push(curNode.right);
      }
    }
    if (currentQueue.length == 0) {
      result.push(curNode.val);
      [currentQueue, anotherQueue] = [anotherQueue, currentQueue];
    }
  }
  return result;
};
// @lc code=end
