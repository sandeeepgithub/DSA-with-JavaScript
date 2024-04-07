// ==================== STACK ====================

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    let removalNode = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removalNode.next;
    }

    this.size--;
    return removalNode.val;
  }

  multiplePush(val) {
    let i = 0;
    while (i !== val) {
      this.push(i);
      i++;
    }
    return this;
  }
}

let list = new Stack("list");
list.multiplePush(5);
console.log(list);

// ==================== QUEUE ===================

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }

    let removalNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.tail = null;
    } else {
      this.first = removalNode.next;
    }

    this.size--;
    return removalNode.val;
  }
}

list = new Queue("list");

console.log(list);
