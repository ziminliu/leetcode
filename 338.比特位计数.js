/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let result = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    // 1. 循环判断
    // let cur = i;
    // while(cur !== 0){
    //     result[i]++;
    //     cur = cur & (cur -1);
    // }
    // 2. cur 中1 的个数总是比 cur & (cur -1) 多一个
    result[i] = result[i & (i - 1)] + 1;
  }
  return result;
};
// @lc code=end
