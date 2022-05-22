/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let result = Number.MAX_SAFE_INTEGER;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (left <= right && sum >= target) {
      result = Math.min(result, right - left + 1);
      sum -= nums[left++];
    }
  }
  return result == Number.MAX_SAFE_INTEGER ? 0 : result;
};
// @lc code=end
