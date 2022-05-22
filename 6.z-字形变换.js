/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length<=numRows || numRows === 1){return s}
    const arr = new Array(numRows).fill('')
    let num = 0
    let plus = true
    for(let i = 0; i<s.length;i++){
        arr[num] += s[i]

        if(plus){ // 向下行+1
            num += 1
        }else{ // 向上行-1
            num -= 1
        }

        if(num === 0){ 
            plus = true
        }
        if(num === numRows-1){ 
            plus = false
        }
        
    }
    return arr.join('')
};
// @lc code=end

