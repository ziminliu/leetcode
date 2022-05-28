/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
  let result = [];
  if (!root) return [];
  let currentQueue = [root];
  let anotherQueue = [];
  let curDepthMaxValue = -Number.MAX_SAFE_INTEGER;
  let curNode;
  while (currentQueue.length || anotherQueue.length) {
    curNode = currentQueue.shift();
    if (curNode) {
      curDepthMaxValue = Math.max(curDepthMaxValue, curNode.val);
      if (curNode.left) {
        anotherQueue.push(curNode.left);
      }
      if (curNode.right) {
        anotherQueue.push(curNode.right);
      }
    }
    if (currentQueue.length == 0 && anotherQueue !== 0) {
      result.push(curDepthMaxValue);
      curDepthMaxValue = -Number.MAX_SAFE_INTEGER;
      [currentQueue, anotherQueue] = [anotherQueue, currentQueue];
    }
  }
  return result;
};
// @lc code=end
