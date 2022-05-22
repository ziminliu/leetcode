/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let flag = false;
  let head = (curl = {});
  let last;
  while (l1.val || l2.val) {
    curl.val = ((l1.val + l2.val) % 10) + flag;
    flag = Math.floor((l1.val + l2.val) / 10);
    let temp = {};
    last = curl;
    curl.next = temp;
    curl = temp;
    l1 = l1.next || {};
    l2 = l2.next || {};
    // console.log({l1, l2,curl});
  }
  last.next = undefined;
  console.log(last);
  return head;
};
// const l1 = {
//   val: 9,
//   next: {
//     val: 9,
//     next: {
//       val: 9,
//       next: {
//         val: 9,
//         next: {
//           val: 9,
//           next: {
//             val: 9,
//             next: {
//               val: 9,
//             },
//           },
//         },
//       },
//     },
//   },
// };

// const l2 = {
//   val: 9,
//   next: {
//     val: 9,
//     next: {
//       val: 9,
//       next: {
//         val: 9,
//       },
//     },
//   },
// };

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
    },
  },
};

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
    },
  },
};
console.log(JSON.stringify(addTwoNumbers(l1, l2)));
// @lc code=end
