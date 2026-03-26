class TreeNode{
    constructor(val=0,left=null,right=null){
        this.val=val;
        this.left=left;
        this.right=right;

    }
}
//All are O(n) & O(n)
function maxDepth_DFS_Recursive(root){ //Neetcode

    if (!root) return 0;

    return 1+Math.max(maxDepth(root.left),maxDepth(root.right));

}

function maxDepth_DFS_Iterative(root){

    if (!root) return 0;

    let res=0;
    const stack=[[root,1]];
    let curr,node,depth;

    while(stack.length){

        curr=stack.pop();
        node=curr[0];
        depth=curr[1];
        res=Math.max(res,depth);

        if(node.left) stack.push([node.left,depth+1]);
        if(node.right) stack.push([node.right,depth+1]);
    
    }
    return res;
}

function maxDepth_BFS_Iterative(root){

    if (!root) return 0;

    let level=0;
    const queue=[root];
    let size,node;
    
    while(queue.length>0){
        size=queue.length;
        for(let i=0;i<size;i++){

            node=queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
       
        }
        level++;
    }
    return level;
}