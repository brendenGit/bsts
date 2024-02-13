class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null || this.root === undefined) {
      this.root = new Node(val)
      return this;
    }

    let current = this.root;
    let temp;
    while (current) {
      temp = current;
      val < current.val ? current = current.left : current = current.right;
    }
    val < temp.val ? temp.left = new Node(val) : temp.right = new Node(val);
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (!node) {
      this.root = new Node(val);
      return this;
    }

    if (val < node.val) {
      if (!node.left) {
        node.left = new Node(val);
      } else {
        this.insertRecursively(val, node.left);
      }
    } else if (val > node.val) {
      if (!node.right) {
        node.right = new Node(val);
      } else {
        this.insertRecursively(val, node.right);
      }
    }

    return this;
  }



  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    if (!current) return undefined;

    while (current !== null && current.val !== val) {
      val < current.val ? current = current.left : current = current.right;
    }

    const result = current === null ? undefined : current;
    return result;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node === null || node.val === val) {
      return node === null ? undefined : node;
    }

    if (val < node.val) {
      return this.findRecursively(val, node.left);
    } else {
      return this.findRecursively(val, node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root) {
    if (!node) {
      return [];
    }

    const result = [node.val];

    if (node.left) {
      result.push(...this.dfsPreOrder(node.left));
    }

    if (node.right) {
      result.push(...this.dfsPreOrder(node.right));
    }

    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root) {
    if (!node) {
      return [];
    }

    const result = [];

    if (node.left) {
      result.push(...this.dfsInOrder(node.left));
    }

    result.push(node.val);

    if (node.right) {
      result.push(...this.dfsInOrder(node.right));
    }

    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root) {
    if (!node) {
      return [];
    }

    const result = [];

    if (node.left) {
      result.push(...this.dfsPostOrder(node.left));
    }

    if (node.right) {
      result.push(...this.dfsPostOrder(node.right));
    }

    result.push(node.val);

    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) {
      return [];
    }

    const queue = [this.root];
    const result = [];

    while (queue.length > 0) {
      const current = queue.shift(); // Dequeue the front node
      result.push(current.val); // Process the node

      // Enqueue the left child
      if (current.left) {
        queue.push(current.left);
      }

      // Enqueue the right child
      if (current.right) {
        queue.push(current.right);
      }
    }

    return result;
  }
}

module.exports = BinarySearchTree;
