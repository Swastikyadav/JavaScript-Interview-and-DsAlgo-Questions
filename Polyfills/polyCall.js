/*
  - Write a polyfill for JavaScript's native call method.
*/

let obj = {
  firstName: "Swastik",
  lastName: "Yadav",
  // fn() {console.log(`I am ${this.firstName} ${this.lastName}`)} - This is to be achieved.
}

function printName(city, country) {
  console.log(`I am ${this.firstName} ${this.lastName} from ${city} ${country}`);
}

// Native call method.
printName.call(obj, "Delhi", "India");

// Solution
Function.prototype.polyCall = function(context, ...args) {
  // 'this' points to printName function
  // context.fn = this;

  // return context.fn(...args);

  const symbol = Symbol();
  context[symbol] = this;

  const result = context[symbol](...args);
  delete context[symbol];

  return result;
}

// Using polyCall method.
printName.polyCall(obj, "Delhi", "India");