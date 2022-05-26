/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let newTimePoints = [...timePoints].sort();
  newTimePoints = newTimePoints.map((time) => {
    let [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
  });
  //   循环
  let result = 24 * 60;
  newTimePoints.push(result + newTimePoints[0]);

  for (let i = 0; i < newTimePoints.length - 1; i++) {
    if (result > Math.abs(newTimePoints[i] - newTimePoints[i + 1])) {
      result = Math.abs(newTimePoints[i] - newTimePoints[i + 1]);
    }
  }
  return result;
};
// @lc code=end
