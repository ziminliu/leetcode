/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  if (nums.length >= 3) {
    let sortNums = nums.sort((a, b) => a - b);
    let curIndex = 0;
    while (curIndex < nums.length - 2) {
      twoSun(sortNums, curIndex, result);
      let temp = sortNums[curIndex];
      // 移除起始重复项
      while (temp == sortNums[curIndex]) {
        curIndex++;
      }
    }
  }
  return result;
};
var twoSun = function (nums, i, list) {
  let start = i + 1;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[i] + nums[start] + nums[end] === 0) {
      list.push([nums[i], nums[start], nums[end]]);
      // 去除尾部重复，当然也可使用start 的逻辑
      let temp = nums[end];
      while (nums[end] === temp) {
        end--;
      }
    } else if (nums[i] + nums[start] + nums[end] > 0) {
      end--;
    } else {
      start++;
    }
  }
};
// @lc code=end
