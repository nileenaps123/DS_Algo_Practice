function levelOrder_q_shift(root){
    let res=[];
    if(!root)return res;
    let q=[root];
    
    while(q.length){

        let level=[];
        let size=q.length;
        for(let i=0;i<size;i++){
            let node=q.shift();
            level.push(node.val);
            if(node.left)q.push(node.left);
            if(node.right)q.push(node.right);
        }
        res.push(level);
    }
    return res;
}

function levelOrder_q_ptr_techq(root){
    let res=[];
    if(!root)return res;
    let q=[root];
    let left=0;
    while(left<q.length){
        let level=[]
        let size=q.length-left;
        for(let i=0;i<size;i++){
            let node=q[left];
            left++;
            level.push(node.val);
            if(node.left)q.push(node.left);
            if(node.right)q.push(node.right);
        }
        res.push(level);
    }
    return res;
}

//TC-O(n) SC -O(h)

/*“Time complexity is O(n) since each node is processed once. Space complexity is O(n) due to the queue storing up to n/2 nodes in the worst case 
and the result array storing all nodes. Using a pointer instead of shift avoids O(n²) overhead in JavaScript arrays.”*/