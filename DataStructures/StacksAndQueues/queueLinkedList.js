class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }

}

class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }

    //push
    enqueue(val){
        let newNode=new Node(val);
        if(this.size===0){
            this.first=newNode;
            this.last=newNode;
        }else{
            this.last.next=newNode;
            this.last=newNode;
        }
        return ++this.size;
    }

    //shift

    dequeue(){
        if(this.size===0)return null;
        let temp=this.first;
        if(this.size===1){
            this.last=null;

        }
            
        this.first=this.first.next;
        this.size--;
         
        return temp.val;
        

    }
}

let q1=new Queue();
q1.enqueue(1);
console.log(q1);

 q1.enqueue(2);
console.log(q1);
/*
q1.enqueue(3);
console.log(q1);

console.log(q1.dequeue());
console.log(q1);

console.log(q1.dequeue());
console.log(q1);

console.log(q1.dequeue());
console.log(q1);

console.log(q1.dequeue());
console.log(q1);
 */


