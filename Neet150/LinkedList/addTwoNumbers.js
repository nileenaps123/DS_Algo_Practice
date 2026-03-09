//Nikhil
//O(Max(n,m))-TC & SC ......
function addTwoNumbers(l1,l2){

    const result=new ListNode(0);
    let ptr=result;
    let sum,carry=0;

    while(l1!==null || l2!==null){
        sum=0+carry;
        if(l1!==null){
            sum+=l1.val;
            l1=l1.next;
        }
        if(l2!==null){
            sum+=l2.val;
            l2=l2.next;
        }

        carry=Math.floor(sum/10);
        sum=sum%10;
        ptr.next=new ListNode(sum);
        ptr=ptr.next;


    }
    if(carry>0)ptr.next=new ListNode(carry);

    return result.next;


}