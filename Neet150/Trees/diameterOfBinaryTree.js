class TreeNode{
    constructor(val=0,left=null,right=null){
        this.val=val;
        this.left=left;
        this.right=right;

    }
}
/*

TC-O(n),SC-O(h),
Best case-O(logn) --balanced tree,
Worst -O(n)
 */
function diameterOfBinaryTree(root){

    const diameter=[0];
    getSubTreeHeight(root,diameter);
    return diameter[0];

}

function getSubTreeHeight(node,diameter){

    let l=0,r=0,currDiameter;

    if(!node.left && !node.right) return 0;

    if(node.left){
         l =1+getSubTreeHeight(node.left,diameter);
    } 

    if(node.right){
         r =1+getSubTreeHeight(node.right,diameter);
    } 

    currDiameter=l+r;
    diameter[0]=Math.max(currDiameter,diameter[0]);

    return l>r ? l:r;

}