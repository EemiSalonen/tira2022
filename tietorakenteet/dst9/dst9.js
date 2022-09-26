const Node = require('bst-js');
/**
 *
 * @param {any} root
 * @param  {any} values
 * @return {Node}
 */
function createTree(root, ...values) {
  const tree = new Node(root);
  const insertables = [...values];
  for (const value of insertables) {
    tree.insert(value);
  }
  return tree;
}

const tree = createTree(10, 2, 6, 23, 1, 12, 21, 5);

console.log(tree);
console.log('Breadth first -search:');
tree.breadthFirst(function () {
  console.log(this.value);
});
console.log('-------------------------');
console.log('Depth first -search:');
console.log(
  tree.depthFirst(function () {
    console.log(this.value);
  })
);

/* Breadth first -haku eteen ns. "leveyssuunnasta eli vasemmalta oikealle puu rakenteessa, kun taas depth first -haku ottaa ensin
vasemmanpuolisen haaran ja käy sen läpi vasemmalta oikealle ja siirtyy sitten oikean puolimmaiseen haaraan. */
module.exports = { createTree };
