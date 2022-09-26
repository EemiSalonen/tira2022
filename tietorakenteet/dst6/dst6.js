const Stack = require('stack-lifo');
/**
 *
 * @param {string} str
 * @return {boolean}
 */
function reverseString(str) {
  const stack = new Stack();
  for (const letter of str) {
    stack.push(letter);
  }
  let reversed = '';
  const strLength = stack.size();
  for (let i = 0; i < strLength; i++) {
    reversed += stack.pop();
  }
  return reversed;
}
/**
 *
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
  const spaceless = str.replace(/\s+/g, '').toLowerCase();
  const reversed = reverseString(str).replace(/\s+/g, '').toLowerCase();
  return spaceless == reversed ? true : false;
}

module.exports = { reverseString, isPalindrome };
