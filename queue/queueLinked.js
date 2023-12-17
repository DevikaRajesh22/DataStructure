class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.rear = null;
        this.front = null
    }
    isEmpty(){
        return this.front===null;
    }
    getSize(){
        let curr=this.front;
        let count=0;
        while(curr){
            count++;
            curr=curr.next;
        }
        return count;
    }
    peek(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return null;
        }
        return this.front.value;
    }
    display(){
        let queueValues='';
        let curr=this.front;
        while(curr){
            queueValues+=curr.value+' -> ';
            curr=curr.next;
        }
        console.log(queueValues);
    }
    enqueue(element){
        const node=new Node(element);
        if(this.isEmpty()){
            this.rear=this.front=node;
        }else{
            this.rear.next=node;
            this.rear=node;
        }
    }
    dequeue(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return null;
        }
        const frontNode=this.front.value;
        this.front=this.front.next;
        if(this.front===null){
            this.rear=null;
        }
        return frontNode;
    }
}