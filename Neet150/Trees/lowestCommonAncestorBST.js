/*TC---O(h) where h is the height of the tree. 
In the worst case (skewed tree), this could be O(n), but for a balanced BST, it's O(log n).

SC---O(1) as we only use a constant amount of extra space (just moving the root pointer).*/
//Neetcode & Striver(explanation-theory)
function lowestCommonAncestorBST(root,p,q){

   let curr=root;

    while(curr){
        if(p.val<curr.val && q.val<curr.val) curr=curr.left;
        else if(p.val>curr.val && q.val>curr.val) curr=curr.right;
        else return curr;
    }
    return null;
}

