// Polyfill of Array.prototype.map method
Array.prototype.myMap = function (callback) {
  const resultArr = [];

  for(let i = 0; i < this.length; i++) {
    resultArr.push(callback(this[i], i, this));
  }

  return resultArr;
};

// Polyfill of Array.prototype.filter method
Array.prototype.myFilter = function (callback) {
  const resultArr = [];

  for(let i = 0; i < this.length; i++) {
    const bool = callback(this[i], i, this);
    bool === true && resultArr.push(this[i]);
  }

  return resultArr;
};

// Polyfill of Array.prototype.reduce method
Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  for(let i = 0; i < this.length; i++) {
    if (i === 0 && initialValue === undefined) {
      acc = this[i];
    } else {
      acc = callback(acc, this[i], i, this);
    }
  }

  return acc;
};
