/*
 * @lc app=leetcode.cn id=708 lang=javascript
 *
 * [708]  排序的循环链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  if (head === null) {
    head = insertVal;
    insertVal.next = head;
  } else if (head.next === null) {
    head.next = insertVal;
    insertVal.next = head;
  } else {
    // 查找插入
    let cur = head;
    // 中间 || 最大值 || 最小值
    while (true) {
      if (cur.val <= insertVal.val && insertVal.val <= cur.next.val) {
        break;
      }
      if (cur.val <= insertVal.val && cur.val >= cur.next.val) {
        break;
      }
      if (cur.val >= insertVal.val && cur.val >= cur.next.val) {
        break;
      }
      cur = cur.next;
    }
    insertVal.next = cur.next;
    cur.next = insertVal;
  }
  return head;
};
// @lc code=end
