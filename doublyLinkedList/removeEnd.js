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
    getSeize(){
        return this.size;
    }
    print(){
        if(this.isEmpty()){
            console.log('List is emptyt');
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
            this.head=null;
            this.tail=null;
        }else{
            this.tail.next=node;
            node.prev=this.tail;
            this.tail=node;
        }
        this.size++;
    }
    removeEnd(){
        if(this.isEmpty()){
            return null;
        }else{
            this.tail=this.tail.prev;
            this.tail.next=null;
        }
        this.size--;
        return value;
    }
}