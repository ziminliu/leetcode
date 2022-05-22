/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // TODO: 双指针
  let newArr = [...nums1, ...nums2].sort((a, b) => b - a);
  if (!newArr.length) return 0;
  return (
    (newArr[Math.floor((newArr.length + 1) / 2) - 1] +
      newArr[Math.round((newArr.length + 1) / 2) - 1]) /
    2
  );
};
// @lc code=end