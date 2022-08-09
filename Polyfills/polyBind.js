/*
  - Write a polyfill for JavaScript's native bind method.
*/

let obj = {
  firstName: "Swastik",
  lastName: "Yadav",
  // fn() {console.log(`I am ${this.firstName} ${this.lastName}`)} - This is to be achieved.
}

function printName(city, country) {
  console.log(`I am ${this.firstName} ${this.lastName} from ${city} ${country}`);
}

// Native bind method.
const nativePrintNameBind = printName.bind(obj);
nativePrintNameBind("Delhi", "India");

// Solution
Function.prototype.polyBind = function(context, ...args) {
  // 'this' points to printName function
  let callback = this;

  return function(...args2) {
    callback.apply(context, [...args, ...args2]);
  };
}

// Using polyBind method.
const polyPrintNameBind = printName.polyBind(obj);
polyPrintNameBind("Delhi", "India");