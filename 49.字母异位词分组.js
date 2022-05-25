/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let str = Array.from(strs[i]).sort().join();
    if (map.has(str)) {
      map.set(str, [...map.get(str), strs[i]]);
    } else {
      map.set(str, [strs[i]]);
    }
  }
  return Array.from(map.values());
};
// @lc code=end
