TC -O(n),SC-O(1)
class ListNode{ //from Nikhil Lohia
    constructor(val,next=null){
        this.val=val;
        this.next=next;
    }
}

function reorderList(head){

    //partition at middle
    let p1,p2;
    p1=p2=head;

    while(p2.next!==null && p2.next.next!==null){
        p1=p1.next;
        p2=p2.next.next;

    }
    let secondPart =p1.next;
    
    //reverse second half
 
    let prev=p1.next=null;
    let curr=secondPart;
    let temp;
    
    while(curr){
        temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
        
    }
    
    //Reordering

    let temp1,temp2;
    let first=head,second=prev;

    while(second!==null){
        temp1=first.next;
        temp2=second.next;
        first.next=second;
        second.next=temp1;
        first=temp1;
        second=temp2; 

    } 
}
const node=new ListNode(1);
node.next=new ListNode(2);
node.next.next=new ListNode(3);
node.next.next.next=new ListNode(4);


reorderList(node);
console.log(node)