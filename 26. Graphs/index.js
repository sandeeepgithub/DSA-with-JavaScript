class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    if (!this.adjacencyList[val]) {
      this.adjacencyList[val] = [];
      return this.adjacencyList;
    }
  }

  addEdge(val1, val2) {
    this.adjacencyList?.[val1]?.push(val2);
    this.adjacencyList?.[val2]?.push(val1);
    return this.adjacencyList;
  }

  removeEdge(val1, val2) {
    this.adjacencyList[val1] = this.adjacencyList[val1].filter(
      (el) => el !== val2
    );
    this.adjacencyList[val2] = this.adjacencyList[val2].filter(
      (el) => el !== val1
    );
    return this.adjacencyList;
  }

  removeVertex(val) {
    let temp = this.adjacencyList[val];
    temp.forEach((el) => this.removeEdge(el, val));

    delete this.adjacencyList[val];
    return this.adjacencyList;
  }
}

const graph = new Graph();
console.log(graph);
