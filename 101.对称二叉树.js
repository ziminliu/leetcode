/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let queen = [];
  let tempQueen = [];
  let before, end;
  if (root) {
    queen.push(root.left, root.right);
  }
  let loopTimes = queen.length;
  while (queen.length) {
    loopTimes = queen.length;
    for (let i = 0; i < loopTimes / 2; i++) {
      before = queen.shift();
      after = queen.pop();
      // 值比较
      if (before && after && before.val !== after.val) {
        return false;
      }
      // 一个null 一个有值
      if ((before == null && after) || (after == null && before)) {
        return false;
      }
      if (before) {
        tempQueen.push(before.left, before.right);
      }
      if (after) {
        tempQueen.push(after.left, after.right);
      }
    }
    queen = tempQueen;
    tempQueen = [];
  }
  return true;
};
// [2,3,3,4,5,5,4,null,null,8,9,9,8]
console.log(
  isSymmetric({
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: {
          val: 8,
          left: null,
          right: null,
        },
        right: {
          val: 9,
          left: null,
          right: null,
        },
      },
    },
    right: {
      val: 3,
      left: {
        val: 5,
        left: {
          val: 9,
          left: null,
          right: null,
        },
        right: {
          val: 8,
          left: null,
          right: null,
        },
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  })
);
// @lc code=end
