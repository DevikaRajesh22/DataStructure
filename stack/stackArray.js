class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    isEmpty() {
        return this.count === 0;
    }
    getSize() {
        return this.count;
    }
    peek() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return null;
        } else {
            return this.items[this.count - 1];
        }
    }
    display() {
        if(this.isEmpty()){
            console.log('Stack is empty');
            return null;
        }
        console.log('Stack elements :')
        let stackValues = '';
        for (let i = 0; i < this.count; i++) {
            stackValues += this.items[i] + ' - ';
        }
        console.log(stackValues);
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
        return element;
    }
    pop() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return null;
        }
        const poppedElement = this.items[this.count - 1];
        this.count--;
        return poppedElement;
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
