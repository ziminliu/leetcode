/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
  let stack1 = [];
  let stack2 = [];
  let result = null;
  let carryFlag = 0;
  let currentValue = 0;
  let node1 = 0;
  let node2 = 0;
  while (l1 || l2) {
    if (l1) {
      stack1.push(l1);
      l1 = l1.next;
    }
    if (l2) {
      stack2.push(l2);
      l2 = l2.next;
    }
  }
  //   console.log(stack1, stack2);
  while (stack1.length || stack2.length) {
    if (stack1.length) {
      node1 = stack1.pop().val;
    } else {
      node1 = 0;
    }
    if (stack2.length) {
      node2 = stack2.pop().val;
    } else {
      node2 = 0;
    }
    currentValue = node1 + node2 + carryFlag;
    carryFlag = Number.parseInt(currentValue / 10);
    result = new ListNode(currentValue % 10, result);
  }
  if (carryFlag) {
    result = new ListNode(carryFlag, result);
  }
  return result;
};
// @lc code=end
