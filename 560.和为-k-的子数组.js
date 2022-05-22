/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let result = 0;
    let sumCount = {
        "0": 1,
    };
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        // k == 0
        if (sumCount[sum - k]) {
            result += sumCount[sum - k];
        }
        if (sumCount[sum]) {
            sumCount[sum] += 1;
        } else {
            sumCount[sum] = 1;
        }
    }
    return result;
};
// @lc code=end

