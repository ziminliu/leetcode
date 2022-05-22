/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isStraight = function (nums) {
    const card = new Set();
    let max = 0;
    let min = 14;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            continue;
        }
        if (card.has(nums[i])) {
            return false;
        } else {
            card.add(nums[i]);
            max = Math.max(max, nums[i])
            min = Math.min(min, nums[i])
        }
        if (max - min >= 5) return false;
    }
    return true;
};