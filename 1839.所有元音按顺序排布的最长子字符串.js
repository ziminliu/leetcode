/*
 * @lc app=leetcode.cn id=1839 lang=javascript
 *
 * [1839] 所有元音按顺序排布的最长子字符串
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function (word) {
  let chars = ["a", "e", "i", "o", "u"];
  let left = 0;
  let right = 1;
  let curIndex = 0;
  let max = 0;
  while (right < word.length) {
    curIndex = chars.findIndex((val) => word[right - 1] == val);
    if (word[right] == word[right - 1] || word[right] == chars[curIndex + 1]) {
      right++;
      if (word[left] =="a" && word[right - 1] == "u") {
        max = Math.max(max, right - left);
      }
    } else {
      left = right;
      right++;
    }
  }
  return max;
};
console.log(longestBeautifulSubstring("aeiaaioaaaaeiiiiouuuooaauuaeiu"));
// @lc code=end
