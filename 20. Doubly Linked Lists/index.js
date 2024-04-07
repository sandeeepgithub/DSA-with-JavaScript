class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) {
      return undefined;
    }

    let removalNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removalNode.prev;
      this.tail.next = null;
      removalNode.prev = null;
    }

    this.length--;
    return removalNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let removalNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removalNode.next;
      this.head.prev = null;
    }
    this.length--;
    removalNode.next = null;
    return removalNode;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let middle = Math.floor(this.length / 2);
    let counter = 0;
    let node = this.head;
    if (index <= middle) {
      for (let i = 0; i < this.length; i++) {
        if (counter === index) {
          return node;
        }
        node = node.next;
        counter++;
      }
    } else {
      let newIndex = this.length - index;

      node = this.tail;
      for (let i = 1; i < newIndex; i++) {
        node = node.prev;
      }
    }

    return node;
  }

  set(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index === this.length - 1) {
      return !!this.push(val);
    }

    let newNode = new Node(val);
    let prevNode = this.get(index);

    prevNode.prev.next = newNode;
    newNode.prev = prevNode.prev;
    newNode.next = prevNode;
    prevNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    let removalNode = this.get(index);
    let prevNode = removalNode.prev;
    let nextNode = removalNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removalNode.next = null;
    removalNode.prev = null;
    this.length--;
    return removalNode;
  }

  reverse() {
    var temp = null;
    var current = this.head;

    while (current != null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp != null) {
      this.head = temp.prev;
    }

    return this;
  }

  toArray() {
    let arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }

    return arr;
  }

  multiplePush(val) {
    for (let i = 0; i < val; i++) {
      this.push(`${i}`);
    }
    return this;
  }
}

const list = new DoublyLinkedList("list");
list.multiplePush(7);
console.log(list);
