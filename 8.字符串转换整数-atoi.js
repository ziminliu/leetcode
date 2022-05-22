/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let start, end;
  let result;
  let flag = "";
  s = s.trim();
  for (var i = 0; i < s.length; i++) {
    end = i;
    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(s[i])) {
      if (start == undefined) {
        start = i;
      }
      continue;
    } else if (s[i] === "-") {
      if (!flag && i == 0) {
        flag = "-";
      } else {
        return 0;
      }
    } else if (s[i] === "+") {
      if (!flag && i == 0) {
        flag = "+";
      } else {
        return 0;
      }
    } else if (s[i] === ".") {
      break;
    } else {
      break;
    }
  }
  if (start === undefined) {
    return 0;
  }
  if (end === s.length - 1) {
    result = Number(flag + s.substring(start, end + 1));
  } else {
    result = Number(flag + s.substring(start, end));
  }
  if (result < -2147483648) {
    return -2147483648;
  }
  if (result > 2147483647) {
    return 2147483647;
  }
  return result;
};
// @lc code=end
console.log(myAtoi("   -04f"));
