class Node{
    constructor(value){
        this.value=value;
        this.prev=null;
        this.next=null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size;
    }
    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let curr=this.head;
            let listValues='';
            while(curr){
                listValues+=curr.value+' <-> ';
                curr=curr.next;
            }
            console.log(listValues);
        }
    }
    append(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            node.prev=this.tail;
            this.tail=node;
        }
        this.size++;
    }
    reverse(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let curr=this.tail;
            let listValues='';
            while(curr){
                listValues+=curr.value+' <-> ';
                curr=curr.prev;
            }
            console.log(listValues);
        }
    }
}
const list=new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();
list.reverse();