class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    let valIndex = this.values.length - 1,
      parentIndex = valIndex === 0 ? 0 : Math.floor((valIndex - 1) / 2),
      parent = this.values[parentIndex];

    while (parent < val) {
      parentIndex = valIndex <= 1 ? 0 : Math.floor((valIndex - 1) / 2);
      parent = this.values[parentIndex];

      console.log(parentIndex, parent);

      this.values[parentIndex] = val;
      this.values[valIndex] = parent;

      valIndex = parentIndex;
    }

    return this.values;
  }

  removeMax() {
    let root = this.values.shift();
    this.values.unshift(this.values.pop());

    this.swapRoot(0);
    return root;
  }

  swapRoot(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;

    if (
      leftChildIndex > this.values.length - 1 &&
      rightChildIndex > this.values.length - 1
    ) {
      return;
    }

    let leftChild = this.values[leftChildIndex];
    let rightChild = this.values[rightChildIndex];

    if (rightChild > leftChild) {
      let temp = rightChild;
      this.values[rightChildIndex] = this.values[index];
      this.values[index] = temp;
      this.swapRoot(rightChildIndex);
    } else if (leftChild > rightChild) {
      let temp = leftChild;
      this.values[leftChildIndex] = this.values[index];
      this.values[index] = temp;
      this.swapRoot(leftChildIndex);
    }
  }

  // ==================== AUTHOR'S CODE ====================

  // insert(element) {
  //   this.values.push(element);
  //   this.bubbleUp();
  // }
  // bubbleUp() {
  //   let idx = this.values.length - 1;
  //   const element = this.values[idx];
  //   while (idx > 0) {
  //     let parentIdx = Math.floor((idx - 1) / 2);
  //     let parent = this.values[parentIdx];
  //     if (element <= parent) break;
  //     this.values[parentIdx] = element;
  //     this.values[idx] = parent;
  //     idx = parentIdx;
  //   }
  // }
}

const heap = new MaxBinaryHeap();

console.log(heap);

// ============================== PRIORITY QUEUE ==============================

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);

    this.values.push(newNode);

    let valIndex = this.values.length - 1,
      parentIndex = valIndex === 0 ? 0 : Math.floor((valIndex - 1) / 2),
      parent = this.values[parentIndex];

    while (parent.priority < priority) {
      parentIndex = valIndex <= 1 ? 0 : Math.floor((valIndex - 1) / 2);
      parent = this.values[parentIndex];

      this.values[parentIndex] = newNode;
      this.values[valIndex] = parent;

      valIndex = parentIndex;
    }
    return this.values;
  }

  dequeue() {
    let root = this.values.shift();
    this.values.unshift(this.values.pop());

    this.swapRoot(0);
    return root;
  }

  swapRoot(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;

    let leftChild = this.values[leftChildIndex];
    let rightChild = this.values[rightChildIndex];

    if (leftChildIndex < this.values.length - 1) {
      if (rightChild.priority > leftChild.priority) {
        let temp = rightChild;
        this.values[rightChildIndex] = this.values[index];
        this.values[index] = temp;
        this.swapRoot(rightChildIndex);
      }
    } else if (rightChildIndex < this.values.length - 1) {
      if (leftChild.priority > rightChild.priority) {
        let temp = leftChild;
        this.values[leftChildIndex] = this.values[index];
        this.values[index] = temp;
        this.swapRoot(leftChildIndex);
      }
    }
  }
}

const prQueue = new PriorityQueue();
// heap.enqueue("one", 1)
// heap.enqueue("two",2)
// heap.enqueue("three", 3)
// heap.enqueue("four", 4)
prQueue.enqueue("one", 1);
prQueue.enqueue("V", 5);
prQueue.enqueue("II", 2);

console.log(prQueue);
