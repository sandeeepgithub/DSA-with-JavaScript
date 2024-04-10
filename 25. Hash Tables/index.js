function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

function improvedHash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

class HashTable {
  constructor(size = 17) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
    return this.keyMap;
  }

  get(key) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      return undefined;
    }

    let val = this.keyMap[index].filter((el) => el[0] === key)[0]?.[1];
    return val;
  }

  values() {
    let vals = [];

    this.keyMap.forEach((el) =>
      el.forEach((ele) => !vals.includes(ele[1]) && vals.push(ele[1]))
    );
    return vals;
  }

  keys() {
    let vals = [];

    this.keyMap.forEach((el) =>
      el.forEach((ele) => !vals.includes(ele[0]) && vals.push(ele[0]))
    );
    return vals;
  }
}

const hash = new HashTable(3);
hash.set("bye", "world");
hash.set("hello", "world");
hash.set("john", "doe");
hash.set("what is this?", "long string");
hash.set("jane", "doe");

console.log(hash);
