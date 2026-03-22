
class ListNode{
    constructor(val,next){
        this.val=val;
        this.next=next;
    }
}

function reverseKGroup(head, k) {
    const dummy=new ListNode(0,head);
    let groupPrev=dummy;
    while(true){

        let kth=getKth(groupPrev,k);//2
        if(kth===null)break;

        let groupNext=kth.next;//3

        let prev=groupNext;//3
        let curr=groupPrev.next;//1
        while(curr!==groupNext){
            let temp=curr.next;//2
            curr.next=prev;//1->3
            prev=curr;//1
            curr=temp;//2
            
        }
        let temp=groupPrev.next;
        groupPrev.next=kth;
        groupPrev=temp;

    }

    return dummy.next;
    


 }

function getKth(curr,k){

    while(curr && k>0){
        curr=curr.next;
        k--;
    }
    return curr;
}


const list1=new ListNode(1);
list1.next=new ListNode(2);
list1.next.next=new ListNode(3);
list1.next.next.next=new ListNode(4);
list1.next.next.next.next=new ListNode(5);

console.log(reverseKGroup(list1,k=2));

