/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  dfs(res, "", n, n);
  return res;
};
function dfs(array, str, left, right) {
  if (left > right || left < 0 || right < 0) {
    return;
  } else if (left == 0 && right == 0) {
    array.push(str);
  } else {
    dfs(array, str + "(", left - 1, right);
    dfs(array, str + ")", left, right - 1);
  }
}

// @lc code=end
