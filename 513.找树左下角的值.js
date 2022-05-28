/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */ /**
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
var findBottomLeftValue = function (root) {
  let result = root.val;
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
      if (anotherQueue.length) {
        result = anotherQueue[0].val;
      }
      [currentQueue, anotherQueue] = [anotherQueue, currentQueue];
    }
  }
  return result;
};
// @lc code=end
