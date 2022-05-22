/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let start = 0;
  let end = 0;
  let maxValue = nums[0];
  let temp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > temp && nums[i] > maxValue  && maxValue < 0) {
      maxValue = nums[i];
      temp = maxValue;
      start = i;
      end = i;
      continue;
    }
    if (nums[i] > 0) {
      // 接收之前的负值
      if (temp + nums[i] > maxValue) {
        maxValue = temp + nums[i];
        temp = maxValue;
        end = i;
      }
    } else {
      temp += nums[i];
    }
  }
  return maxValue;
};

console.log(maxSubArray([8, -19, 5, -4, 20])); // 21
console.log(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1])); // 3
