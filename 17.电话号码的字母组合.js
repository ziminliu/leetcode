/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let result = [];
  let obj = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let numbers = digits.split("");
  if (numbers.length === 0) return [];
  let dp = [[""]];
  for (let i = 0; i < numbers.length; i++) {
    let temp = obj[number[i]].split('').map(i=>
        dp[i]    
    )
  }
};
// @lc code=end
