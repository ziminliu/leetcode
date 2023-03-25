/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let newIntervals = intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  // [[1,100],[11,22],[1,11],[2,12]];
  while (newIntervals.length > 1) {
    console.log("time");
    // 不相交
    // [1,2],[2,3] ..
    // console.log(newIntervals,'newIntervals')
    if (newIntervals[0][1] <= newIntervals[1][0]) {
      newIntervals.splice(0, 1);
      continue;
    }
    // 包含
    // [1,4],[2,3] ..
    // [1,5],[1,3] ..
    // [1,5],[2,5] ..
    if (
      newIntervals[0][0] <= newIntervals[1][0] &&
      newIntervals[0][1] >= newIntervals[1][1]
    ) {
      result.push(newIntervals[0]);
      newIntervals.splice(0, 1);
      continue;
    }
    // 被包含 或相交
    // [1,3],[2,4]
    // [1,3],[1,4]
    if (newIntervals[0][1] > newIntervals[1][0]) {
      result.push(newIntervals[1]);
      newIntervals.splice(1, 1);
      continue;
    }
  }
  return result.length;
};
let intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
eraseOverlapIntervals(intervals);
// @lc code=end
