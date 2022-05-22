/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = (right - left) * Math.min(height[left], height[right]);
  if (left === right) {
    return max;
  }
  while (left !== right) {
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
  }
  console.log(max, left, right);
  return max;
};
// @lc code=end
