class ListNode{
    constructor(val,next=null,random=null){
        this.val=val;
        this.next=next;
        this.random=random;
    }
}//Nikhil lohia's soln
//O(n) & O(1)
 
 function copyRandomList(head) {
          if(!head) return null  
          let curr=head;
        //create duplicate nodes and link its next(alone) to existing nodes
        while(curr){
            const node=new Node(curr.val);
            node.next=curr.next;
            curr.next=node;
            curr=node.next;
        }

        //connect random of new nodes

        curr=head;
        while(curr){
            if(curr.random){
               curr.next.random=curr.random.next;// as curr.random is old node & curr.random.next 
                                                    //is copy node
               
            }else{
                curr.next.random=null;
            }
            curr=curr.next.next;
        }

        //detach duplicate nodes and connect originals with each other
        //and duplicates with each other

        curr=head;
        let newHead,newCurr;
        newHead=head.next;
        newCurr=newHead;
        while(curr){
           
            curr.next=newCurr.next;
            curr=curr.next;
            if(curr) {
                newCurr.next=curr.next;  
                newCurr=newCurr.next;
            }   

        }
    return newHead;  
};