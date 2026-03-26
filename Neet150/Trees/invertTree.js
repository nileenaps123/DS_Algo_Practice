//invert Tree=mirroring a tree--O(n) & O(n) for all
class TreeNode{
    constructor(val=0,left=null,right=null){
        this.val=val;
        this.left=left;
        this.right=right;

    }
}
//DFS-recursive --O(n) & O(n)--for recursion stack
function invertTree_dfs_recursive(root){
    if(!root)return null;
    const left=invertTree(root.left);
    const right=invertTree(root.right);
    root.left=right;
    root.right=left;
    return root;

}
//DFS-iterative--stack--pop-O(n) & O(n)
function invertTree_DFS_Iterative(root){
    if(!root)return null;
    const stack=[root];
    while(stack.length){
        const node=stack.pop();
        if(node && (node.right||node.left)){
            [node.left,node.right]=[node.right,node.left];
            stack.push(node.left,node.right);
        }
    }
    return root;

}

//BFS-iterative--queue--shift-O(n) & O(n)
function invertTree(root){
    if(!root)return null;
    const queue=[root];
    while(queue.length){
        const node=queue.shift();//Shift has TC of O(n)
        if(node && (node.right||node.left)){
            [node.left,node.right]=[node.right,node.left];
            queue.push(node.left,node.right);
        }
    }
    return root;

} 
const root=new TreeNode(4);
root.left=new TreeNode(2);
root.right=new TreeNode(7);
root.left.left=new TreeNode(1);
root.left.right=new TreeNode(3);
root.right.left=new TreeNode(6);
root.right.right=new TreeNode(9);

console.log(invertTree_dfs_recursive(root));