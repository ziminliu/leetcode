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
  if(!root){
    return true;
  }
  function checkVal(tree1, tree2) {
    if (tree1 === tree2) {
      return true;
    } else if (tree1 && tree2 && tree1.val === tree2.val) {
      if (
        checkVal(tree1.left, tree2.right) &&
        checkVal(tree1.right, tree2.left)
      ){
        return true;
      }else{
        return false;
      }
    } else {
      return false;
    }
  }
  return checkVal(root.left, root.right);
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
