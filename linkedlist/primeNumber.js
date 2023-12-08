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
            let prev=this.head;
            let listValues='';
            while(prev){
                listValues+=prev.value+' -> ';
                prev=prev.next;
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
    prime(){
        let curr=this.head;
        while(curr){
            if(isPrime(curr.value)===0){
                console.log(curr.value);
            }
            curr=curr.next;
        }
    }
}

const list=new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(7);
// list.print();
list.prime();

function isPrime(value){
    flag=0;
    for(let i=0;i<=value/2;i++){
        if(value%i==0){
            flag=1;
            break;
        }
    }
    return flag;
}