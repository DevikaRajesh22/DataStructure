class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            return this._insertNode(this.root, newNode);
        }
    }
    _insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this._insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this._insertNode(root.right, newNode);
            }
        }
    }
    search(value) {
        return this._search(this.root, value);
    }
    _search(root, value) {
        if (root === null) {
            return false;
        }
        if (root.value === value) {
            return true;
        } else if (value < root.value) {
            return this._search(root.left, value);
        } else {
            return this._search(root.right, value);
        }
    }
    DFSPreorder(root) {
        if (root) {
            console.log(root.value);
            this.DFSPreorder(root.left);
            this.DFSPreorder(root.right);
        }
    }
    DFSInorder(root) {
        if (root) {
            this.DFSInorder(root.left);
            console.log(root.value);
            this.DFSInorder(root.right);
        }
    }
    DFSPostorder(root) {
        if (root) {
            this.DFSPostorder(root.left);
            this.DFSPostorder(root.right);
            console.log(root.value);
        }
    }
    BFSTraversal() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }
    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }
    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.right) {
                return root.left;
            } else if (!root.left) {
                return root.right;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(2);
console.log('BFS Traversal : ');
bst.BFSTraversal();
console.log('DFS Preorder Traversal : ');
bst.DFSPreorder(bst.root);
console.log('DFS Inorder Traversal : ');
bst.DFSInorder(bst.root);
console.log('DFS Postorder traversal : ');
bst.DFSPostorder(bst.root);
console.log('15 ? ',bst.search(15));
console.log('20 ? ',bst.search(20));
console.log('Minimum : ',bst.min(bst.root));
console.log('Maximum : ',bst.max(bst.root));
console.log('Deleted 10 : ');
bst.delete(10);
bst.BFSTraversal();