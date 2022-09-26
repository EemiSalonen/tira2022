/* eslint-disable new-cap */

const L = require('simple-double-linked-list');
/**
 *
 * @param {Array} arr
 * @return {list}
 */
function listFromArray(arr) {
  const list = new L.List();
  for (const item of arr) {
    list.AddFront(item);
  }
  return list;
}
/**
 *
 * @param {list} list
 */
function print(list) {
  for (const item = list.Begin(); !item.IsAtEnd(); item.Next()) {
    console.log(item.Value());
  }
}
/**
 *
 * @param {list} list
 */
function printReverse(list) {
  list.Begin();
  for (const item = list.End(); !item.IsAtEnd(); item.Previous()) {
    console.log(item.Value());
  }
}
/**
 *
 * @param {list} list
 * @param {number} index
 * @param {any} item
 * @return {boolean}
 */
function insertToIndex(list, index, item) {
  const size = list.Size();
  if (index < 0 || index > size) return false;
  const iterator = list.Begin();
  for (let i = 0; i < index - 1; i++) {
    iterator.Next();
  }
  list.InsertAfter(item, iterator);
  return true;
}
/**
 *
 * @param {list} list
 * @param {number} index
 * @return {boolean}
 */
function removeFromIndex(list, index) {
  const size = list.Size();
  if (index < 0 || index > size) return false;
  const iterator = list.Begin();
  for (let i = 0; i < index; i++) {
    iterator.Next();
  }
  list.Remove(iterator);
  return true;
}

module.exports = {
  print,
  listFromArray,
  printReverse,
  insertToIndex,
  removeFromIndex,
};
