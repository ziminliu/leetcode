/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let strNumber = String(x);
  let index = 0;
  while (index < strNumber.length / 2) {
    if (strNumber[index] === strNumber[strNumber.length - index - 1]) {
      index++;
    } else {
      return false;
    }
  }
  return true;
};
isPalindrome(121);
// @lc code=end
