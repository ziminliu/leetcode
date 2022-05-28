/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let result = [];
  for (const item of asteroids) {
    while (
      result.length &&
      result[result.length - 1] > 0 &&
      result[result.length - 1] < -item
    ) {
      // 左边的撞毁
      result.pop();
    }
    if (result.length && item < 0 && -item == result[result.length - 1]) {
      result.pop();
    } else if (!result.length || result[result.length - 1] < 0 || item > 0) {
      result.push(item);
    }
  }
  return result;
};
// @lc code=end
