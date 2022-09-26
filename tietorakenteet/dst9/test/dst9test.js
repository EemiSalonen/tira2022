const funcs = require('../dst9.js');
const expect = require('chai').expect;

describe('Testing dst9 -functions', () => {
  const tree = funcs.createTree(10, 2, 6, 23, 1, 12, 21, 5);
  it('Export function:', () => {
    expect(funcs.createTree).to.be.a('Function');
  });

  const breadthValues = [];
  const depthValues = [];

  tree.breadthFirst(function () {
    breadthValues.push(this.value);
  });
  tree.depthFirst(function () {
    depthValues.push(this.value);
  });

  it('CreateTree functionality', () => {
    expect(tree).to.be.a('Object');
    expect(breadthValues).to.deep.equal([10, 2, 23, 1, 6, 12, 5, 21]);
    expect(depthValues).to.deep.equal([10, 2, 1, 6, 5, 23, 12, 21]);
  });
});
