/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s2, s1) {
  let result = [];
  if (s1.length > s2.length) return result;
  // 滑动窗口
  let counter = new Array(26).fill(0);
  let aCodePoint = "a".codePointAt(); // 97
  let windowWidth = s1.length;
  // 记录s1 字符对应个数
  for (let i = 0; i < s1.length; i++) {
    counter[s1[i].codePointAt() - aCodePoint] += 1;
    counter[s2[i].codePointAt() - aCodePoint] -= 1;
  }
  if (allItemZero(counter)) {
    result.push(0);
  }
  for (let i = 0; i < s2.length - s1.length; i++) {
    // 右移 去掉第一个 添加下一个
    // console.log(counter)
    counter[s2[i].codePointAt() - aCodePoint] += 1;
    counter[s2[i + windowWidth].codePointAt() - aCodePoint] -= 1;
    if (allItemZero(counter)) {
      result.push(i + 1);
    }
  }
  return result;
};

var checkInclusion = function (s1, s2) {};

// 判断起始位置是否符合条件
function allItemZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      return false;
    }
  }
  return true;
}
// @lc code=end
