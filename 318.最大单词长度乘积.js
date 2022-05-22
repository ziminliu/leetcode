/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let wordsFlag = Array(words.length);
  // 初始化数组
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      wordsFlag[i] |= 1 << (words[i][j].charCodeAt() - 97);
    }
  }
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      // 不包含相同字符
      if ((wordsFlag[i] & wordsFlag[j]) == 0) {
        result = Math.max(words[i].length * words[j].length, result);
      }
    }
  }
  return result;
};
// @lc code=end
