class Node{
    constructor(val){
        this.val=val;
        this.prev=null;
        this.next=null;
    }
}

class DoublyLinkedList{
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
           newNode.prev=this.tail;
           this.tail=newNode;
        }
        this.length++;
        return this;

    }

    pop(){

        if(!this.head) return undefined;

        let poppedNode=this.tail;
        if (this.length===1){
            this.head=null;
            this.tail=null;
        }else{
            this.tail=poppedNode.prev;
            this.tail.next=null;
            poppedNode.prev=null;
        }
        this.length--;
        return poppedNode;

    }

    shift(){

        if(!this.head) return undefined;

        let oldHead=this.head;

        if(this.length===1){
            this.head=null;
            this.tail=null;
        }else{
            this.head=oldHead.next;
            this.head.prev=null;
            oldHead.next=null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val){
        let newNode=new Node(val);
        if(this.length===0){
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.head.prev=newNode;
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;
        return this;

    }

    get(idx){

        if(idx<0 ||idx >=this.length) return null;

/*         let middle=Math.floor(this.length/2);

        

        if (idx<=middle){

            let curr=this.head;
            for(let i=0;i<=middle;i++){

                if(idx===i) return curr;
                curr=curr.next;

        }
        }
        else{

            let curr=this.tail;
            for(let i=middle+1;i<this.length;i++){

                if(idx===i) return curr;
                curr=curr.prev;

            }    
        } */
        let curr;
        let count;

        if(idx<=this.length/2){
             curr=this.head;
             count=0;
            while(count!==idx){
                curr=curr.next;
                count++;

            }
        } else{
             curr=this.tail;
             count=this.length-1;
            while(count!==idx){
                curr=curr.prev;
                count--;
            }
        } 
        return curr;  

    }

    set(idx,val){

        let foundNode=this.get(idx);
        if(foundNode) {
            foundNode.val=val;
            return true
        }
        return false;
    }

    insert(idx,val){

        if(idx<0 || idx>this.length) return false;
        if(idx===0){
            this.unshift(val);

        }else if(idx===this.length) this.push(val);  
        else  {
            let newNode=new Node(val);
/*             let beforeNode=this.get(idx-1);
            let afterNode=beforeNode.next;
            beforeNode.next=newNode;
            newNode.prev=beforeNode;
            newNode.next=afterNode;
            afterNode.prev=newNode; */

            let afterNode=this.get(idx);
            let beforeNode=afterNode.prev;
            beforeNode.next=newNode;
            newNode.prev=beforeNode;
            newNode.next=afterNode;
            afterNode.prev=newNode;

            this.length++;

        }  
        
        return true;

    }

    remove(idx){

        if(idx<0||idx>=this.length) return undefined;

        else if(idx===0) return this.shift();
     

        else if (idx===this.length-1) return this.pop();

        else{
            let removedNode=this.get(idx);
            let nextNode=removedNode.next;
            let prevNode=removedNode.prev;
            prevNode.next=nextNode;
            nextNode.prev=prevNode;
            removedNode.next=null;
            removedNode.prev=null;
            this.length--;
            return removedNode;


        }

    }

    //5 10 15 20
    //20 15 10 5

    reverse(){   /* Swap next and prev for all nodes of
       doubly linked list */


        if(!this.head || !this.head.next)return this.head;

        let curr=this.head;
        this.tail=curr;
        let temp;

        while(curr!==null){
            
            temp=curr.prev;
            curr.prev=curr.next;
            curr.next=temp;
            curr=curr.prev;
            
        }
        this.head=temp.prev;
        
        return this;

    }         


}

let list=new DoublyLinkedList();
list.push(5);
list.push(10);
list.push(15);
list.push(20);
//console.log(list);

console.log(list.reverse())
//console.log(list.shift())
//console.log(list.shift())



