//dfs -iterative
function kthSmallest(root,k){

    let stack=[];
    let curr=root;
    while(true){
        while(curr){
            stack.push(curr);
            curr=curr.left;
        }
        curr=stack.pop();
        k--;
        if(k===0)return curr.val;
        curr=curr.right;

    }

}
//TC -O(h+k) h-ht of tree when we go to left most node
//k-for processing of k nodes
//SC -O(H) due to stach max stack size-ht of tree