/*
  Create a stack data structure. The stack should be a class with methods 'push', 'pop', and 'peek'. Adding an element to the stack should store it until it is removed.

  --Examples
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.pop(); // returns 2
  s.pop(); // returns 1

  Stack is FILO - First in last out.
  push and pop
*/

class Stack {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.push(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const s = new Stack();
console.log(s);
s.add(1);
console.log(s);
s.add(5);
s.add(8);
s.remove();
console.log(s);
console.log(s.peek());
console.log(s);