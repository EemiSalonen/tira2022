const funcs = require('../algot7.js');
const expect = require('chai').expect;

describe('Testing algot5', () => {
  // Testijonot
  const s1 = 'GCACT';
  const s2 = 'AGGCA';
  const s3 = 'ATC';
  const s4 = 'GCA';

  it('Should export functions', () => {
    expect(funcs.genString).to.be.a('Function');
    expect(funcs.getAllSubstrs).to.be.a('Function');
    expect(funcs.findLcs).to.be.a('Function');
  });

  it('Function genString', () => {
    const str = funcs.genString('ATGC', 1000);
    expect(str.length).equal(1000);
    expect(str).to.be.a('string');
    expect(str).to.include('A');
    expect(str).to.include('T');
    expect(str).to.include('G');
    expect(str).to.include('C');
  });

  it('Function getAllSubstrs', () => {
    expect(funcs.getAllSubstrs(s3)).to.have.members([
      'A',
      'AT',
      'ATC',
      'T',
      'TC',
      'C',
    ]);
    expect(funcs.getAllSubstrs(s4)).to.have.members([
      'G',
      'GC',
      'GCA',
      'C',
      'CA',
      'A',
    ]);
  });

  it('Function findLcs', () => {
    expect(funcs.findLcs(s1, s2)).equal('GCA');
    expect(funcs.findLcs(s3, s4)).to.be.oneOf(['A', 'C']);
  });
});
