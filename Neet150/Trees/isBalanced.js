//O(n)-TC
//SC-O(log(n)) -- bestcase for balanced & O(h)
class TreeNode{
    constructor(val=0,left=null,right=null){
        this.val=val;
        this.left=left;
        this.right=right;

    }
}
function isBalanced(root){

    return dfs(root)[0];

    function dfs(root){
        if (!root) return [true,0];

        const left=dfs(root.left);
        const right=dfs(root.right);
        const balanced=left[0] && right[0] && Math.abs(left[1]-right[1]) <=1;
        const height=1+Math.max(left[1],right[1]);
        return [balanced,height]
    }
}