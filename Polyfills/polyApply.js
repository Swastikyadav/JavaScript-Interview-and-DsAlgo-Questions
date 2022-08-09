/*
  - Write a polyfill for JavaScript's native apply method.
*/

let obj = {
  firstName: "Swastik",
  lastName: "Yadav",
  // fn() {console.log(`I am ${this.firstName} ${this.lastName}`)} - This is to be achieved.
}

function printName(city, country) {
  console.log(`I am ${this.firstName} ${this.lastName} from ${city} ${country}`);
}

// Native apply method.
printName.apply(obj, ["Delhi", "India"]);

// Solution
Function.prototype.polyApply = function(context, args) {
  // 'this' points to printName function
  context.fn = this;

  return context.fn(...args);
}

// Using polyApply method.
printName.polyApply(obj, ["Delhi", "India"]);