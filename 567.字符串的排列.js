/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  function judgeSameStringChar(s1, s2) {
    if (s1.length !== s2.length) return false;
    let diffObj = {};
    for (let i = 0; i < s1.length; i++) {
      diffObj[s1[i]] === undefined
        ? (diffObj[s1[i]] = 1)
        : (diffObj[s1[i]] = diffObj[s1[i]] + 1);
      diffObj[s2[i]] === undefined
        ? (diffObj[s2[i]] = -1)
        : (diffObj[s2[i]] = diffObj[s2[i]] - 1);
    }
    return Object.keys(diffObj).every((key) => diffObj[key] === 0);
  }
  if (1 <= s1.length <= 10000 && 1 <= s2.length <= 10000) {
    for (let left = 0; left < s2.length; left++) {
      if (judgeSameStringChar(s1, s2.substring(left, left + s1.length))) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end
