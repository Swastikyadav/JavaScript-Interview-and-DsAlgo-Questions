/*
  Implement a queue datastructure using 2 stacks.
  *Do not* crate an array inside of the queue class.
  Queue should implement the methods 'add', 'remove', and 'peek'.

  For a reminder on what each method does, look back at the queue question.

  --Examples
  
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.peek(); // returns 1
  q.remove(); // returns 1
  q.remove(); // returns 2
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

// -------------------------------

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.add(record);
  }

  remove() {
    // Pop from first and push to second, while there is an element in first.
    while(this.first.peek()) {
      this.second.add(this.first.remove());
    }

    // The record element to return from this method. But return only after next while loop.
    const record = this.second.remove();

    // Pop from second and push to first, while there is an element in second.
    while(this.second.peek()) {
      this.first.add(this.second.remove());
    }

    return record;
  }

  peek() {
    while(this.first.peek()) {
      this.second.add(this.first.remove());
    }

    const record = this.second.peek();

    while(this.second.peek()) {
      this.first.add(this.second.remove());
    }

    return record;
  }
}

// ------------------------------

const q = new Queue();
console.log(q);
q.add(1);
console.log(q);
q.add(2);
console.log(q);
q.peek(); // returns 1
console.log(q);
q.remove(); // returns 1
console.log(q);
q.remove(); // returns 2
console.log(q);