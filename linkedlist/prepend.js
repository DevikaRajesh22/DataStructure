class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += curr.value + " -> ";
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
}

const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();
