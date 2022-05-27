/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let result = [];
  for (let i = 0; i < temperatures.length - 1; i++) {
    let higherIndex = i + 1;
    while (temperatures[higherIndex] <= temperatures[i]) {
      higherIndex++;
    }
    if (higherIndex >= temperatures.length) {
      higherIndex = i;
    }
    result.push(higherIndex - i);
  }
  result.push(0);
  // console.log(result);;
  return result;
};
// @lc code=end
