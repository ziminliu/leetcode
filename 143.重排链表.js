/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // array shift() pop();
  let array = [];
  let cur = head;
  while (cur) {
    array.push(cur);
    cur = cur.next;
  }
  cur = array.shift();
  let count = 0;
  while (array.length) {
    if (count % 2) {
      cur.next = array.shift();
    } else {
      cur.next = array.pop();
    }
    cur = cur.next;
    count++;
  }
  cur.next = null;
};
// @lc code=end
