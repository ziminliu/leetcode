/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let bitArray = new Array(32).fill(0);
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < 32; j++) {
          // 用与而不用异或在于高位的判断
          bitArray[j] += (nums[i] >> (31 - j)) & 1;
      }
  }
  let result = 0;
  // console.log(bitArray)
  for (let m = 0; m < 32; m++) {
      result = (result << 1) + bitArray[m] % 3
  }
  return result;
};
// @lc code=end
