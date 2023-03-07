/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let max = 0;
  while (right < s.length) {
    if (s.substring(left, right).includes(s[right])) {
      left = s.indexOf(s[right], left) + 1;
    } else {
      right++;
    }
    if (max < right - left) {
      max = right - left;
    }
  }
  return max;
};
console.log(lengthOfLongestSubstring("pwwkew"));
// @lc code=end
