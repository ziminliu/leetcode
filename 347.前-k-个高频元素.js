/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  nums.forEach((i) => {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  });
  let res = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
  // console.log(map, res);
  return res.slice(0, k);
};
// @lc code=end
