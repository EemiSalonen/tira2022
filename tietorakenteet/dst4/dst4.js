class MySet {
  constructor(arr = []) {
    this.arr = arr;
    this.size = this.arr.length;
    this.makeSet();
  }

  makeSet() {
    // Taulukko järjestetään ja sitten verrataan alkiota viereiseen ja työntää alkion eriävien alkioiden leikkauskohdassa uuteen taulukkoon
    this.arr.sort();
    const tempArr = [];
    for (let i = 0; i <= this.arr.length - 1; i++) {
      if (this.arr[i] != this.arr[i + 1] || i == this.arr.length - 1) {
        tempArr.push(this.arr[i]);
      }
    }
    this.arr = tempArr;
  }

  add(data) {
    if (this.arr.indexOf(data) < 0) {
      this.arr.push(data);
      this.size = this.arr.length;
      return true;
    }
    return false;
  }

  remove(data) {
    for (const item of this.arr) {
      if (data == item) {
        this.arr.splice(this.arr.indexOf(data), 1);
        this.size = this.arr.length;
        return true;
      }
    }
    return false;
  }

  has(data) {
    for (const item of this.arr) {
      if (data == item) {
        return true;
      }
    }
    return false;
  }

  union(setA, ...sets) {
    const all = [...sets];
    for (const set of all) {
      set.arr.forEach((item) => {
        setA.add(item);
      });
    }
    return setA;
  }

  checkUnique(arr) {
    arr.sort();
    const tempArr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] != arr[i + 1] || i == arr.length - 1) {
        tempArr.push(arr[i]);
      }
    }
    return tempArr;
  }
}

module.exports = MySet;
