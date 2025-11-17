class Node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}

class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    //insert val at the beginning of list for stack implementation(LIFO)
    push(val){
        let newNode=new Node(val);
        if(!this.size){
            this.first=newNode;
            this.last=newNode;
            
        }else{
            let temp=this.first;
            this.first=newNode;
            this.first.next=temp;
        }
        return ++this.size;

    }

    //Remove a val from beginning of list---stack LIFO

    pop(){

       if(!this.size) return null;
       let temp=this.first;

       if(this.size===1){
            
            this.last=null;

        }
        this.first=this.first.next;
        this.length--;
        return temp.val;
    }
}

let stack=new Stack();
stack.push(200);
stack.push(201);
stack.push(202);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

