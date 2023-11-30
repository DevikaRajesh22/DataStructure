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
    removeIndex(index){
        if(index<0 || index > this.size){
            console.log('Invalid index');
            return;
        }
        let removedNode;
        if(index===0){
            removedNode=this.head;
            this.head=this.head.next;
        }else{
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next;
            }
            removedNode=prev.next;
            prev.next=removedNode.next;
        }
        this.size--;
        return removedNode;
    }
}

const list=new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();
list.removeIndex(2);
list.print();