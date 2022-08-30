/*
  Implement an infinite add curry function such that:
  curryAdd(5)(7)(6)(4)() //22
*/

function curryAdd(a) {
  return function(b) {
    if (b) {
      return curryAdd(a + b);
    } else {
      return a;
    }
  }
}

console.log(
  curryAdd(5)(7)(6)(4)()
);

// Implement a general infinite curry function which can take a callback instead of harding coding to make addCurry.

function curry(cb) {
  function curriedCb(...arg) {
    if (arg.length === 0) {
      return cb();      
    }
    
    return (...arg2) => {
      if (arg2.length === 0) {
        return cb(...arg);          
      }

      return curriedCb(...arg, ...arg2);
    }
  }

  return curriedCb;
}

const curriedFn = curry((...nums) => nums.reduce((acc, cv) => acc + cv, 0));

console.log(
  curriedFn(5)(7)(6)(4)()
);