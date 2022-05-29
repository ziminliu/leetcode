/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start

var KthLargest = function (k, nums) {
  // 长度为k 的数组(最小堆)
  this.heap = [];
  this.add = (val) => {
    let insertIndex = this.heap.findIndex((item) => item > val);
    if (insertIndex == -1) {
      if (this.heap.length < k) {
        this.heap.push(val);
      } else {
        this.heap.push(val);
        this.heap.shift();
      }
    } else {
      if (this.heap.length < k) {
        this.heap.splice(insertIndex, 0, val);
      } else {
        this.heap.splice(insertIndex, 0, val);
        this.heap.shift();
      }
    }
    return this.heap[0];
  };
  nums.forEach((i) => {
    this.add(i);
  });
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  return this.add(val);
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
