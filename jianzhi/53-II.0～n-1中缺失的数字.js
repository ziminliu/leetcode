/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function (nums) {
    let left = 0;
    let right = nums.length;
    let mid = Math.floor((left + right) / 2);
    while (right - left > 1) {
        if (mid === nums[mid]) {
            left = mid;
        } else {
            right = mid;
        }
        mid = Math.floor((left + right) / 2);
    }
    return mid == nums[mid] ? left + 1: left;
};