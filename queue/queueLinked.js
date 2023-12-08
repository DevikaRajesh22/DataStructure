class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }
    isEmpty(){
        return this.front===null;
    }
    getSize(){
        let count=0;
        let curr=this.front;
        while(curr){
            count++;
            curr=curr.next;
        }
        return count;
    }
    display(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return null;
        }
        let result='';
        let curr=this.front;
        while(curr){
            result+=curr.value+' -> ';
            curr=curr.next;
        }
        console.log(result);
    }
    peek(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return null;
        }
        return this.front.value;
    }
    enqueue(element){
        const node=new Node(element);
        if(this.isEmpty()){
            this.front=this.rear=node;
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
const queue=new Queue();
queue.display();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.display();
queue.dequeue();
queue.display();
console.log('Peek : ',queue.peek());
console.log('Size : ',queue.getSize());