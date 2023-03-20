/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let time = 0;
  let orangesRottingHelper = function (grid) {
    let changed = false;
    let m = grid.length;
    let n = grid[0].length;
    let beforeGrid = grid.map((arr) => [...arr]);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] == beforeGrid[i][j] && grid[i][j] === 2) {
          // 上
          if (i - 1 >= 0 && grid[i - 1][j] === 1) {
            grid[i - 1][j] = 2;
            changed = true;
          }
          // 下
          if (i + 1 < grid.length && grid[i + 1][j] === 1) {
            grid[i + 1][j] = 2;
            changed = true;
          }
          // 左
          if (j - 1 >= 0 && grid[i][j - 1] === 1) {
            grid[i][j - 1] = 2;
            changed = true;
          }
          // 右
          if (j + 1 < grid[0].length && grid[i][j + 1] === 1) {
            grid[i][j + 1] = 2;
            changed = true;
          }
        }
      }
    }
    return [changed, grid];
  };
  let hasChanged;
  do {
    let [changed, afterGrid] = orangesRottingHelper(grid);
    grid = afterGrid;
    if (changed) {
      time++;
    }
    hasChanged = changed;
  } while (hasChanged);
  let hasNormal = false;
  grid.forEach((subArr) => {
    if (subArr.includes(1)) {
      hasNormal = true;
    }
  });
  return hasNormal ? -1 : time;
};
grid=[[2,1,0,2]];
console.log(orangesRotting(grid));
// @lc code=end
