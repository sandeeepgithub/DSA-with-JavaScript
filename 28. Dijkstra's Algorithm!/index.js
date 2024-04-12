class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    if (!this.adjacencyList[val]) {
      this.adjacencyList[val] = [];
    }
    return this.adjacencyList;
  }

  addEdge(val1, val2, weight) {
    this.adjacencyList?.[val1]?.push({ node: val2, weight });
    this.adjacencyList?.[val2]?.push({ node: val1, weight });
    return this.adjacencyList;
  }

  dijkstra(start, end) {
    let nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let smallest,
      result = [];

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === end) {
        // LATER
        while (previous[smallest]) {
          result.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor of this.adjacencyList[smallest]) {
          // Find neighboring node

          // Calculate new distances
          let candidate = distances[smallest] + neighbor.weight;
          if (candidate < distances[neighbor.node]) {
            // Update distances with the node
            distances[neighbor.node] = candidate;

            // Update the path to the node from the previous node
            previous[neighbor.node] = smallest;

            nodes.enqueue(neighbor.node, candidate);
          }
        }
      }
    }
    // Push start and reverse the list
    return result.concat(start).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
