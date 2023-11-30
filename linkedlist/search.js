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
    search(value){
        if(this.isEmpty()){
            return -1;
        }
        let i=0;
        let curr=this.head;
        while(curr){
            if(curr.value===value){
                return i;
            }
            curr=curr.next;
            i++;
        }
        return -1;
    }
}
const list=new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();
console.log(list.search(30));