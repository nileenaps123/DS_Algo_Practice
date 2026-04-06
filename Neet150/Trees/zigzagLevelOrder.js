//TC -O(n2) due to unshift,SC-O(n)
function zigzagLevelOrder(root){
    let res=[];
    if(!root)return res;
    let q=[root];
    let left=0;
    let reverse=false
    while(left<q.length){
        let level=[];
        let size=q.length-left;
        for(let i=0;i<size;i++){

            let node=q[left];
            if(reverse) level.unshift(node.val);
            else level.push(node.val);
            if(node.left)q.push(node.left);
            if(node.right)q.push(node.right);
            left++
        }
        reverse=!reverse;
        res.push(level)
    }
    return res;
}

//Here’s your zigzag level order traversal rewritten using the better approach 
// (reverse() instead of unshift()) 👇

//TC -O(n),SC-O(n)
function zigzagLevelOrder_optimized(root){
    let res = [];
if (!root) return res;

let q = [root];
let left = 0;
let reverse = false;

while (left < q.length) {
    let level = [];
    let size = q.length - left;

    for (let i = 0; i < size; i++) {
        let node = q[left++];
        level.push(node.val);   // always push

        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
    }

    if (reverse) level.reverse(); // 🔥 reverse once per level  

    res.push(level);
    reverse = !reverse;
}

return res;
}    