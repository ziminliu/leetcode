/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let numberStack = [];
  let currLetter = "";
  let operateNum1 = 0;
  let operateNum2 = 0;
  while (tokens.length !== 0) {
    currLetter = tokens.shift();
    switch (currLetter) {
      case "+":
        operateNum2 = numberStack.pop();
        operateNum1 = numberStack.pop();
        numberStack.push(Number(operateNum1) + Number(operateNum2));
        break;
      case "-":
        operateNum2 = numberStack.pop();
        operateNum1 = numberStack.pop();
        numberStack.push(Number(operateNum1) - Number(operateNum2));
        break;
      case "*":
        operateNum2 = numberStack.pop();
        operateNum1 = numberStack.pop();
        numberStack.push(Number(operateNum1) * Number(operateNum2));
        break;
      case "/":
        operateNum2 = numberStack.pop();
        operateNum1 = numberStack.pop();
        numberStack.push(
          Number.parseInt(Number(operateNum1) / Number(operateNum2))
        );
        break;
      default:
        numberStack.push(currLetter);
    }
  }
  // console.log(numberStack)
  return numberStack[0];
};
// @lc code=end
