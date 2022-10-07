const Queue = require('queue-fifo');
/**
 *
 * @param {Array} arr
 * @return {Queue}
 */
function makeQueue(arr) {
  const queue = new Queue(arr);
  for (const item of arr) {
    queue.enqueue(item);
  }
  return queue;
}
/**
 * Stops at given stopper.
 * @param {Queue} myqueue
 * @param {number} stopper
 * @return {Queue}
 */
function checkQueue(myqueue, stopper) {
  while (true) {
    if (myqueue._list.head.data >= stopper) {
      break;
    }
    myqueue.dequeue();
  }
  return myqueue;
}
/**
 * Empties queue and return contents as an array.
 * @param {Queue} queue
 * @return {Array}
 */
function clearQueue(queue) {
  const arr = [];
  while (queue.size() > 0) {
    arr.push(queue.dequeue());
  }
  return arr;
}

module.exports = { makeQueue, checkQueue, clearQueue };
