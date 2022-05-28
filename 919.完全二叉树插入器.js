/*
 * @lc app=leetcode.cn id=919 lang=javascript
 *
 * [919] 完全二叉树插入器
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
var CBTInserter = function (root) {
  // 层次遍历 BFS
  this.treeQueue = [root];
  this.root = root;
  this.current = this.treeQueue.shift();
  while (this.current) {
    if (this.current.left) {
      this.treeQueue.push(this.current.left);
    } else {
      break;
    }
    if (this.current.right) {
      this.treeQueue.push(this.current.right);
    } else {
      break;
    }
    this.current = this.treeQueue.shift();
  }
};

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function (v) {
  let insertNode = new TreeNode(v);
  let parentNodeVal = this.current.val;
  if (!this.current.left) {
    this.current.left = insertNode;
  } else if (!this.current.right) {
    this.current.right = insertNode;
    // 当前节点插满
    this.current = this.treeQueue.shift();
  }
  this.treeQueue.push(insertNode);
  return parentNodeVal;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
// @lc code=end
