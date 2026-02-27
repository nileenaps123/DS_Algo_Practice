class ListNode{
    constructor(val,next=null){
        this.val=val;
        this.next=next;
    }
}
//Iterative-TC O(n+m),SC -O(1)
function mergeTwoLists(list1,list2){
    const dummy={val:0,next:null};
    let curr=dummy;

    while(list1 && list2){
        if(list1.val<list2.val){
            curr.next=list1;
            list1=list1.next;
        }else{
            curr.next=list2;
            list2=list2.next;
        }
        curr=curr.next;
    }
    if(list1===null) curr.next=list2;
    else curr.next=list1;

    return dummy.next  
}

//Recursive,TC O(n+m),SC O(n+m)

function mergeTwoLists1(list1, list2) {
        if(!list1)return list2;
        if(!list2)return list1;

        if(list1.val<=list2.val){
            list1.next=this.mergeTwoLists(list1.next,list2);
            return list1;
        }else{
            list2.next=this.mergeTwoLists(list1,list2.next);
            return list2;
        }

}
//Input: list1 = [1],2,3] list2 = [3,5]
//o/p 1,1,2,3,4,5
const list1=new ListNode(1);
list1.next=new ListNode(2);
list1.next.next=new ListNode(4);

const list2=new ListNode(3);
list2.next=new ListNode(5);
//list2.next.next=new ListNode(5);

console.log(mergeTwoLists(list1,list2));