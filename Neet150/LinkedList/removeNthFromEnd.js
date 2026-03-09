class ListNode{
    constructor(val,next=null){
        this.val=val;
        this.next=next;
    }
}
//TC -O(n),SC -O(1)  Neetcode
function removeNthFromEnd(head,n){

    const dummy=new ListNode(0,head);

    let left=dummy;
    let right=head;

    while(n>0){ //this iteration moves right "n" steps,sothat the gap btwn left & right is maintained
        right=right.next;
        n--;
    }

    while(right!==null){//Move both pointers until right reaches the end.,then left will be at posn just before to be 
                                    //removed node
        left=left.next;
        right=right.next;
    }

    left.next=left.next.next;
    return dummy.next; 

//brute force --O(n),O(n)
 /*    let arr=[];
    let curr=head;

    while(curr!==null){
        arr.push(curr);
        curr=curr.next;
    }

    let idx=arr.length-n;
    if(idx===0)return head.next;
    arr[idx-1].next=arr[idx].next;
    return head;
 */
}