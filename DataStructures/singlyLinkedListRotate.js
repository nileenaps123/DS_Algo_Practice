class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;

    }

    push(val){

        let newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }

    rotate(idx){

        //1 2 3 4 5    -2    --3 4 5 1 2
        //2 3 4 5 1  0
        //3 4 5 1 2

    let i=0;
    let curr=this.head;


    while(i!==idx){
        this.tail.next=curr;
        this.tail=curr;
        curr=curr.next;
        i++;

    }
    this.head=curr;
    this.tail.next=null;
    return this;

    }
}

let list=new SinglyLinkedList();


list.push("1");
list.push("2");
list.push("3");
list.push("4");
console.log(list);

list.rotate(2);