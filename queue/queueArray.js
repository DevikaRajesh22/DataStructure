class Queue{
    constructor(){
        this.items=[];
        this.front=0;
        this.rear=-1;
    }
    isEmpty(){
        return this.front>this.rear;
    }
    getSize(){
        return this.rear-this.front+1;
    }
    peek(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return null;
        }
        return this.items[this.front];
    }
    display(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return null;
        }
        let queueValues='';
        for(let i=this.front;i<=this.rear;i++){
            queueValues+=this.items[i]+' - ';
        }
        console.log(queueValues);
    }
    enqueue(element){
        this.rear++;
        this.items[this.rear]=element;
    }
    dequeue(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return null;
        }
        const frontElement=this.items[this.front];
        this.front++;
        return frontElement;
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
console.log('size : ',queue.getSize());