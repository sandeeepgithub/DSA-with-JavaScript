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

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) {
        return null;
      }

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((el) => {
        if (!visited[el]) {
          return dfs(el);
        }
      });
    })(start);

    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[stack] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((el) => {
        if (!visited[el]) {
          visited[el] = true;
          stack.push(el);
        }
      });
    }

    return result;
  }

  breadthFirst(start) {
    let queue = [start];
    let result = [];
    let visited = {};

    visited[start] = true;
    while (queue.length) {
      let temp = queue.shift();
      result.push(temp);

      this.adjacencyList[temp].forEach((el) => {
        if (!visited[el]) {
          visited[el] = true;
          queue.push(el);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph);
