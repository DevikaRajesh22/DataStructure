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
    prepend(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
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
    mergeLinkedList(list1,list2){
        const mergedList=new LinkedList();
        let curr1=list1.head;
        while(curr1){
            mergedList.append(curr1.value);
            curr1=curr1.next;
        }
        let curr2=list2.head;
        while(curr2){
            mergedList.append(curr2.value);
            curr2=curr2.next;
        }
        return mergedList;
    }
}
const LinkedList1=new LinkedList();
const LinkedList2=new LinkedList();
LinkedList1.append(10);
LinkedList1.append(20);
LinkedList2.append(30);
LinkedList2.append(40);
LinkedList1.print();
LinkedList2.print();
const mergedLinkList=LinkedList1.mergeLinkedList(LinkedList1,LinkedList2);
mergedLinkList.print();
