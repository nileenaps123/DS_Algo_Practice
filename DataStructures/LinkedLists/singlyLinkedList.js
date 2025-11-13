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
    //inserts a value at the end of the list
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
    //takes out a value from the end of list
    pop(){
        if(!this.head) return undefined;
        
        let current=this.head;
        let previous=current;
        while(current.next){
            previous=current;
            current=current.next;
    
        }
        
        this.tail=previous;
        this.tail.next=null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return current;

    }
    //removes the node at the beginning of list and sets new head
    shift(){

        if(!this.head)return undefined;
        
        let currentHead=this.head;
        this.head=currentHead.next;
        this.length--;
        if(this.length===0){
            this.tail=null;
        }
        return currentHead;

    }

    //adds a node at the beginning of list and sets new head
    unshift(val){
        let newNode=new Node (val);
        
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        } else{
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;
        return this;
    }

    get(index){

        if (index <0 || index >=this.length) return undefined

        let current=this.head;
        for (let i=0;i<index;i++){
            current=current.next;

        }
        return current;
    }

    set(index,val){
        let node=this.get(index);
        
        if(node){
            node.val=val;
            return true;
        }

        return false;
    }

    insert(index,val){

        if(index<0 || index>this.length) return  false;
        if(index===0) return !!this.unshift(val);
        if(index===this.length) return !!this.push(val);
        

        let newNode=new Node(val);
        let prevNode=this.get(index-1);
        let currentNode=prevNode.next;
        prevNode.next=newNode;
        newNode.next=currentNode;
        this.length++;
        return true;

    }

    remove(index){

        if(index<0 || index>this.length) return undefined;
        if(index===0)return this.shift();
        if(index===length-1) return this.pop();
        
        let prevNode=this.get(index-1);
        let removedNode=prevNode.next;
        prevNode.next=removedNode.next;
        this.length--;
        return removedNode;


    }

    reverse(){

        if(!this.head) return undefined;
        
        
        let prev=null;
        let current=this.head;
        this.tail=current;

        while(current){
            let next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        this.head=prev;
        return this;
        
    }

    print(){
        let arr=[];
        let curr=this.head;

        while(curr){
            arr.push(curr.val);
            curr=curr.next;

        }
        console.log(arr)
    }
}

let list=new SinglyLinkedList();


list.push("1").push(2);
//list.push("2");
//list.push("3");
//list.push("4");
console.log(list);

//console.log('testing reverse',list.reverse());
//console.log(list.print())
/*
//console.log('list after push',list);

console.log(list.shift());
//console.log("first pop",list.pop());
console.log(list);

console.log("second pop",list.shift());
console.log(list);

console.log("third pop",list.shift());
console.log(list);

console.log("fourth pop",list.shift());
console.log(list);*/

