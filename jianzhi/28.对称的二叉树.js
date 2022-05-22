/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 方法一 遍历树 层次遍历 shift 与 pop 的值相同则对称 ，但由于[2,3,3,4,5,5,4,null,null,8,9,9,8] case 最后两个null 未加上导致未通过
  // let queen = [];
  // let tempQueen = [];
  // let before, after;
  // if (root) {
  //   queen.push(root.left, root.right);
  // }
  // let loopTimes = queen.length;
  // while (queen.length) {
  //   loopTimes = queen.length;
  //   for (let i = 0; i < loopTimes / 2; i++) {
  //     before = queen.shift();
  //     after = queen.pop();
  //     // 值比较
  //     if (before && after && before.val !== after.val) {
  //       return false;
  //     }
  //     // 一个null 一个有值
  //     if ((before == null && after) || (after == null && before)) {
  //       return false;
  //     }
  //     if (before) {
  //       tempQueen.push(before.left, before.right);
  //     }
  //     if (after) {
  //       tempQueen.push(after.left, after.right);
  //     }
  //   }
  //   queen = tempQueen;
  //   tempQueen = [];
  // }
  // return true;
  // 方法二 遍历树
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
// {
//     val: 2,
//     left: null,
//     right: null,
// }
let tree = {
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
};
console.log(isSymmetric());
