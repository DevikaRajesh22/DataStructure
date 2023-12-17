class Stack {
    constructor() {
        this.items = [];
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
        }
        return this.items[this.size - 1];
    }
    display() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return null;
        }
        console.log('Stack elements: ');
        let stackValues = '';
        for (let i = 0; i < this.size; i++) {
            stackValues += this.items[i] + ' - ';
        }
        console.log(stackValues);
    }
    push(element) {
        this.items[this.size] = element;
        this.size++;
    }
    pop() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return null;
        }
        const poppedElement = this.items[this.size - 1];
        this.size--;
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
stack.pop();
stack.display();
console.log('Size : ',stack.getSize());
console.log('Peek : ',stack.peek());