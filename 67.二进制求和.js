/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = [];
    let i = a.length - 1;
    let j = b.length - 1;
    // 使用 a[i] ^ b[j] ^ (a[i + 1] & b[j + 1]) 的方式会丢失连续的进位
    let carry = 0;
    while (i >= 0 || j >= 0) {
        let numA = a[i--] ^ 0;
        let numB = b[j--] ^ 0;
        let sum = numA + numB + carry;
        // 记录进位
        carry = sum >> 1;
        sum = sum % 2;
        result.push(sum);
    }
    // 最高位产生进位
    if (carry) {
        result.push("1")
    }
    return result.reverse().join("")
};
// @lc code=end
