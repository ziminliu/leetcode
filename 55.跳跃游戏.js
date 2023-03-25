/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = nums[0];
  if (max === 0) {
    if (nums.length == 1) {
      return true;
    } else {
      return false;
    }
  }
  for (let i = 1; i < nums.length; i++) {
    if (max >= nums.length - 1) {
      return true;
    }
    if (nums[i] == 0 && max <= i) {
      return false;
    }
    if (nums[i] + i > max) {
      max = nums[i] + i;
      if (max >= nums.length - 1) {
        return true;
      }
    }
  }
  return true;
};
// @lc code=end
