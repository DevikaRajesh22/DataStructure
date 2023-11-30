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
        }else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=node;
        }
        this.size++;
    }
    removeDuplicate(){
        let curr=this.head;
        while(curr && curr.next){
            if(curr.value===curr.next.value){
                curr.next=curr.next.next;
                this.size--;
            }else{
                curr=curr.next;
            }
        }
    }
}
const list=new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(30);
list.print();
list.removeDuplicate();
list.print();
