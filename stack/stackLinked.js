class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    peek() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return null;
        } else {
            return this.top.value;
        }
    }
    display() {
        let stackValues = '';
        let curr = this.top;
        while (curr) {
            stackValues += curr.value + ' - ';
            curr = curr.next;
        }
        console.log(stackValues);
    }
    push(element){
        const node=new Node(element);
        node.next=this.top;
        this.top=node;
        this.size++;
        return element;
    }
    pop(){
        if(this.isEmpty()){
            console.log('Stack is empty');
            return null;
        }
        const poppedElement=this.top;
        this.top=this.top.next;
        this.size--;
        return poppedElement.value;
    }
}
const stack=new Stack();
stack.display();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.display();
console.log('Size : ',stack.getSize());
console.log('Top element : ',stack.peek());
stack.pop();
stack.display();
console.log('Top element : ',stack.peek());
