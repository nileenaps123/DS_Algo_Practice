class ListNode{
    constructor(val,next=null){
        this.val=val;
        this.next=next;
    }
}

function hasCycle(head){

    let slow=head,fast=head;

    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
        if(fast===slow)return true;
    }
    return false;

}

//1-2-2

//let node1, node2,node3,node4;
 const node1=new ListNode(1);
 const node2= new ListNode(2);
 const node3= new ListNode(3);
 const node4= new ListNode(4);
node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node2;
//node.next.next=new ListNode(3);
//node.next.next.next=new ListNode(4);
//node.next.next.next.next=new ListNode(3);

//console.log(node1)
console.log(hasCycle(node1));
