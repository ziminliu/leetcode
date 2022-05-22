/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "";
  //   暴力法
  function getCurrentIndexPalindrome(curIndex, str) {
    let singleStr = str[curIndex];
    let doubleStr = "";
    //   奇数偏移值
    for (let offset = 1; offset < str.length; offset++) {
      // 处理中间发散的情况 奇数
      if (
        str[curIndex + offset] &&
        str[curIndex - offset] &&
        str[curIndex + offset] === str[curIndex - offset]
      ) {
        singleStr = str[curIndex - offset] + singleStr + str[curIndex + offset];
      } else {
        break;
      }
    }
    //   偶数偏移值
    for (let offset = 0; offset < str.length; offset++) {
      // 处理中间发散的情况 奇数
      if (
        str[curIndex + offset + 1] &&
        str[curIndex - offset] &&
        str[curIndex + offset + 1] === str[curIndex - offset]
      ) {
        doubleStr =
          str[curIndex - offset] + doubleStr + str[curIndex + offset + 1];
      } else {
        break;
      }
    }
    return singleStr.length > doubleStr.length ? singleStr : doubleStr;
  }
  for (let i = 0; i < s.length; i++) {
    const curIndexString = getCurrentIndexPalindrome(i, s);
    if (curIndexString.length > result.length) {
      result = curIndexString;
    }
  }
  return result;
};
longestPalindrome("daad");
// @lc code=end
