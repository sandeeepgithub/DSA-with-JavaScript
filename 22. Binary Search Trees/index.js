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

  search(val) {
    if (!this.root) {
      return null;
    }

    let root = this.root;

    while (true) {
      if (val === root.val) {
        return true;
      }

      if (val < root.val) {
        if (root.left) {
          root = root.left;
        } else {
          return false;
        }
      } else {
        if (root.right) {
          root = root.right;
        } else {
          return false;
        }
      }
    }
  }

  findAll(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(this.search(arr[i]), arr[i]);
    }
  }
}
const tree = new BinarySearchTree("tree");
tree.insert(10);
tree.insert(8);
tree.insert(11);
tree.insert(12);
tree.insert(19);
tree.insert(7);
tree.insert(20);
tree.insert(4);
tree.insert(6);
tree.insert(3);
tree.insert(9);

let arr = [10, 8, 11, 12, 19, 7, 20, 4, 6, 3, 9, 25];
console.log(tree);
