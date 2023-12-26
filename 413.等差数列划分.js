/*
 * @lc app=leetcode.cn id=413 lang=javascript
 *
 * [413] 等差数列划分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
	let res = 0;
	let left = 0;
	if (nums.length < 3) return 0;
	for (let i = 2; i < nums.length; i++) {
		if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
			continue;
		} else {
			const gap = i - left;
			res += ((gap - 2) * (gap - 1)) / 2;
      left = i - 1
		}
	}
  const gap = nums.length - left;
  res += ((gap - 2) * (gap - 1)) / 2;
	return res;
};
console.log(numberOfArithmeticSlices([1,2,3,8,9,10]))
// @lc code=end
