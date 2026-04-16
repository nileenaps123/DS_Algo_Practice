//TC-O(n),SC -O(n)

function buildTree(preorder, inorder) {

    if(!preorder.length||!inorder.length) return null;
    let map=new Map();
    for (let i=0;i<inorder.length;i++){
        map.set(inorder[i],i);
    }
    let preIdx=0;
    function subTree(left,right){

        if(left>right) return null;
        let rootVal=preorder[preIdx++];
        let root=new TreeNode(rootVal);

        let mid=map.get(rootVal);

        root.left=subTree(left,mid-1);
        root.right=subTree(mid+1,right);
        return root;

    }
    return subTree(0,inorder.length-1)
    
}

// Tree Node Definition
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}