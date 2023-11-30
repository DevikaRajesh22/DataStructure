class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
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
                listValues+=curr.value+' -> ';
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
    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value===value){
            this.head=this.head.next;
            this.size--;
            return value;
        }else{
            let prev=this.head;
            while(prev.next && prev.next.value!=value){
                prev=prev.next;
            }
            if(prev.next){
                const removedNode=prev.next;
                prev.next=removedNode.next;
                this.size--;
                return removedNode;
            }
            return null;
        }
    }
}
const list= new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();
list.removeValue(30);
list.print();