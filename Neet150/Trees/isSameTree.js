class TreeNode{
    constructor(val=0,left=null,right=null){
        this.val=val;
        this.left=left;
        this.right=right;

    }
}
//TC -O(n),SC -O(log(n)),--balanced tree,O(n)--degenerative tree
function isSameTree(p,q){

    if(!p && !q) return true;
    if(!p|| !q ||(p.val!==q.val)) return false;

    return(isSameTree(p.left,q.left)&&
           isSameTree(p.right,q.right) );

}

