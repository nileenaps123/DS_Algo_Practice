class ListNode{
    constructor(val,next=null){
        this.val=val;
        this.next=next;
    }
}
//Recursive ,O(n)  & O(n)
/* function reverseList(head){

    if(!head||!head.next){// eg:null or 3->null
        return head;
    }
    let newHead=reverseList(head.next);//3->null of 2-3-null
    head.next.next=head;//3-2
    head.next=null;//3-2-null
    return newHead; //3 -2-null



} */
//Iterative -O(n) & O(1)
function reverseList(head){

    if(!head||!head.next){// eg:null or 3->null
        return head;
    }

    let curr=head,next=null;
    let temp;
    while(curr){
        temp=curr.next;
        curr.next=next;
        next=curr;
        curr=temp;

    }
    return next;



}


const node=new ListNode(1);
node.next=new ListNode(2);
node.next.next=new ListNode(3);

console.log(reverseList(node));