/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //   let result = -Infinity;
  /* 超时了 */
  //   function arraySum(a, b, arr) {
  //     let result = 0;
  //     for (let i = a; i <= b; i++) {
  //       result += arr[i];
  //     }
  //     return result;
  //   }
  //   if (nums.length === 0) return result;
  //   /* 暴力法 */
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i; j < nums.length; j++) {j
  //         const subArrSum =arraySum(i, j, nums);
  //         if(result<subArrSum){
  //             result = subArrSum;
  //         }
  //     }
  //   }
  //   return result;

  //   DP 记忆
  /* FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory */
  //   const dp = Array.from(Array(nums.length), () => new Array(nums.length));
  //   if (nums.length === 0) return result;
  //   /* 暴力法 */
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i; j < nums.length; j++) {
  //       //   const subArrSum =arraySum(i, j, nums);
  //       //   if(result<subArrSum){
  //       //       result = subArrSum;
  //       //   }
  //       //   只有 i===j
  //       if (i === j) {
  //         dp[i][j] = nums[i];
  //       } else {
  //         dp[i][j] = dp[i][j - 1] + nums[j];
  //       }
  //       if (result < dp[i][j]) {
  //         result = dp[i][j];
  //       }
  //     }
  //   }
  let result = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    result = Math.max(sum, result);
  }
  return result;
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// @lc code=end
