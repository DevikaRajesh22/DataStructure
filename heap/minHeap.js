class MinHeap {
    constructor() {
        this.heap = [];
    }
    displayHeap() {
        console.log('Min Heap : ', this.heap);
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    heapifyUp() {
        let currIndex = this.heap.length - 1;
        while (currIndex > 0) {
            let parentIndex = Math.floor(currIndex / 2 - 1);
            if (this.heap[currIndex] < this.heap[parentIndex]) {
                this.swap(parentIndex, currIndex);
                currIndex = parentIndex;
            } else {
                break;
            }
        }
    }
    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
    delete(value) {
        const index = this.heap.indexOf(value);
        if (index !== -1) {
            this.swap(index, this.heap.length - 1);
            const deletedValue = this.heap.pop();
            this.heapifyDown(index);
            return deletedValue;
        } else {
            console.log('Not found');
            return null;
        }
    }
    heapifyDown(index) {
        let smallest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest != index) {
            this.swap(smallest, index);
            this.heapifyDown(smallest);
        }
    }
}
const heap=new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(15);
heap.insert(3);
heap.insert(7);
heap.displayHeap();
heap.delete(15);
heap.displayHeap();