class MaxHeap{
    constructor(){
        this.heap=[];
    }
    displayHeap(){
        console.log('Max heap : ',this.heap);
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }
    heapifyUp(){
        let currentIndex=this.heap.length-1;
        while(currentIndex>0){
            let parentIndex=Math.floor(currentIndex/2-1);
            if(this.heap[currentIndex]>this.heap[parentIndex]){
                this.swap(currentIndex,parentIndex);
                currentIndex=parentIndex;
            }else{
                break;
            }
        }
    }
    swap(index1,index2){
        let temp=this.heap[index1];
        this.heap[index1]=this.heap[index2];
        this.heap[index2]=temp;
    }
    delete(value){
        const index=this.heap.indexOf(value);
        if(index !=-1){
            this.swap(index,this.heap.length-1);
            const deletedValue=this.heap.pop();
            this.heapifyDown(index);
            return deletedValue;
        }else{
            console.log('not found');
            return null;
        }
    }
    heapifyDown(index){
        let largest=index;
        let left=2*index+1;
        let right=2*index+2;
        if(left<this.heap.length && this.heap[left]>this.heap[largest]){
            largest=left;
        }
        if(right<this.heap.length && this.heap[right]>this.heap[largest]){
            largest=right;
        }
        if(largest!=index){
            this.swap(index,largest);
            this.heapifyDown(largest);
        }
    }
}
const heap = new MaxHeap();
heap.insert(10);
heap.insert(5);
heap.insert(15);
heap.insert(3);
heap.insert(7);
console.log('Before deletion : ');
heap.displayHeap();
heap.delete(15);
console.log('After deletion : ');
heap.displayHeap();