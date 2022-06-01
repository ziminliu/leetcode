/*
 * @lc app=leetcode.cn id=648 lang=javascript
 *
 * [648] 单词替换
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

var Trie = function () {
  this.children = {};
  this.isWord = false;
  this.char = "";
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let current = this;
  for (const char of word) {
    if (!current.children[char]) {
      current.children[char] = new Trie();
    }
    current = current.children[char];
    current.char = char;
  }
  current.isWord = true;
};

Trie.prototype.findWordPrefix = function (word) {
  let current = this;
  let prefixWord = "";
  for (const char of word) {
    if (current.isWord || !current.children[char]) {
      break;
    }
    prefixWord += char;
    current = current.children[char];
  }
  return current.isWord ? prefixWord : "";
};
var replaceWords = function (dictionary, sentence) {
  let trieDict = new Trie();
  for (let word of dictionary) {
    trieDict.insert(word);
  }
  let sentenceArr = sentence.split(" ");
  return sentenceArr
    .map((word) => {
      const prefix = trieDict.findWordPrefix(word);
      if (prefix) {
        return prefix;
      } else {
        return word;
      }
    })
    .join(" ");
};
// @lc code=end
