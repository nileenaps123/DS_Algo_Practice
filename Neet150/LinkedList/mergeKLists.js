//Neetcode,O(nlogk)
//k-total no of lists,n-total no of nodes across k lists
//SC -O(k)

class ListNode{
    constructor(val,next){
        this.val=val;
        this.next=next;
    }
}

function mergeKLists(lists){
    if(!lists || lists.length===0)return null;
    //divide & Merge
    while(lists.length>1){
        const mergedLists=[];
        for(let i=0;i<lists.length;i+=2){
            
            let list1=lists[i];
            let list2=i+1<lists.length?lists[i+1]:null;
            mergedLists.push(mergeLists(list1,list2))
        }
        lists=mergedLists;
    }
    return lists[0];
//Merge two lists -helper
    function mergeLists(list1,list2){

        if(!list1) return list2;
        if(!list2)return list1;

        const dummy=new ListNode(0,0);
        let node=dummy;

        while(list1 && list2){
            if(list1.val<list2.val){
                node.next=list1;
                list1=list1.next
            }else{
                node.next=list2;
                list2=list2.next;
            }
            node=node.next;
        }
        if(list1)node.next=list1;
        else node.next=list2;
        return dummy.next;    
    }
}

const list1=new ListNode(1);
list1.next=new ListNode(2);
list1.next.next=new ListNode(4);

const list2=new ListNode(1);
list2.next=new ListNode(3);
list2.next.next=new ListNode(5);

const list3=new ListNode(3);
list3.next=new ListNode(6);

//[1,2,4],[1,3,5],[3,6]

 mergeKLists([list1,list2,list3]);
