/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let left = 0;
  let result = 0;
  let multiply = 1;
  for (let right = 0; right < nums.length; right++) {
    multiply *= nums[right];
    if (multiply < k) {
      result++;
    } else {
      multiply /= nums[left++];
    }
  }
  return result;
};
// @lc code=end
