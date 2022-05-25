/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let letterCount = new Array(26).fill(0);
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    letterCount[s[i].codePointAt() - 97] += 1;
    letterCount[t[i].codePointAt() - 97] -= 1;
  }
  // console.log(flag, letterCount)
  return isAllZero(letterCount);
};

var isAllZero = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return false;
    }
  }
  return true;
};
// @lc code=end
