/*
  Implement the 'weave' function. Weave receives two queues as arguments and combines the contents of each into a new, third queue.

  The third queue should contain the *alterating* content of the two queues. The function should handle queues of different lengths without inserting 'undefined' into new one.

  Do not access the array inside of any queue, only use the 'add', 'remove', and 'peek' functions.

  --Example
  const queueOne = new Queue();
  queueOne.add(1);
  queueOne.add(2);

  const queueTwo = new Queue();
  queueTwo.add('Hi');
  queueTwo.add('There');

  const q = weave(queueOne, queueTwo); // ['There', 2, 'Hi', 1]
  q.remove() // 1
  q.remove() // 'Hi'
  q.remove() // 2
  q.remove() // 'There'
*/

// Queue
class Queue {
  constructor(queueData) {
    this.data = queueData || [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

// Weave fucntion starts

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  // Loop as long as any of the source have elm in it.
  while (sourceOne.peek() || sourceTwo.peek()) {
    // Check if sourceOne peek is undefined
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    // Check if sourceTwo peek is undefined
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}

// Weave function ends

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);

const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');

const q = weave(queueOne, queueTwo); // ['There', 2, 'Hi', 1]
console.log(q, "weaveQ");
q.remove() // 1
console.log(q);
q.remove() // 'Hi'
console.log(q);
q.remove() // 2
console.log(q);
q.remove() // 'There'
console.log(q);