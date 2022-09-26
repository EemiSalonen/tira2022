const Graph = require('graph-data-structure');

const values = [
  ['A', 'B', 7],
  ['A', 'C', 4],
  ['B', 'C', 2],
  ['C', 'D', 2],
];
/**
 *
 * @param {array} values
 * @return {any}
 */
function createGraph(values) {
  const graph = new Graph();
  for (const value of values) {
    graph.addEdge(value[0], value[1], value[2]);
  }
  return graph;
}
/**
 *
 * @param {any} graph
 * @param {any} x
 * @param {any} y
 * @return {number}
 */
function shortestDist(graph, x, y) {
  const result = graph.shortestPath(x, y);
  return result['weight'];
}

const graph = createGraph(values);
console.log(graph.serialize());
console.log(graph.topologicalSort());
/* Topologinen järjestys tulee nodejen järjestyksestä (U -> V). */

module.exports = { createGraph, shortestDist };
