class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      console.log("root", val);
      this.root = newNode;
    } else {
      let isTrue = true;
      let root = this.root;

      while (isTrue) {
        if (val === root.val) return "Value already present";
        if (val > root.val) {
          console.log("right", val, root.val);
          if (root.right) {
            root = root.right;
          } else {
            root.right = newNode;
            isTrue = false;
          }
        } else {
          console.log("left", val, root.val);
          if (root.left) {
            root = root.left;
          } else {
            root.left = newNode;
            isTrue = false;
          }
        }
      }
    }
    return this;
  }

  bfs(showVals) {
    let queue = [];
    let visited = [];
    let root = this.root;
    queue.push(root);

    while (queue.length) {
      let node = queue.shift();

      if (showVals) {
        visited.push(node.val);
      } else {
        visited.push(node);
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    return visited;
  }

  dfsPreOrder() {
    let visited = [];

    function traverse(node) {
      visited.push(node.val);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return visited;
  }

  dfsPostOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      visited.push(node.val);
    }

    traverse(this.root);
    return visited;
  }

  dfsInOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      visited.push(node.val);

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return visited;
  }
}
const tree = new BinarySearchTree("tree");
tree.insert(10);
tree.insert(8);
tree.insert(12);
tree.insert(5);
tree.insert(9);
tree.insert(11);
tree.insert(15);

console.log(tree);
