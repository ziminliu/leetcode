/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left !== right) {
        console.log(left, right, nums[left], nums[right], target)
        if((nums[left] + nums[right]) == target){
            break;
        }
        else if ((nums[left] + nums[right]) > target) {
            right--;
        } else {
            left++;
        }
    }
    return [nums[left], nums[right]];
};