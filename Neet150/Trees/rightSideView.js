//TC-0(n2),due to shift ,can be optimized with left ptr
//SC -O(n)(coz worst case last level stores n/2)
//Find next for ptr soln

function rightSideView(root){
    if(!root)return []
    const q=[root];
    const result=[];

    while(q.length>0){

        let qSize=q.length;

        for(let i=0;i<qSize;i++){

            let node=q.shift();
            if(node.left)q.push(node.left);
            if(node.right)q.push(node.right);

            if(i===qSize-1){
                result.push(node.val);
            }
        }
    }
    return result;

}
//O(n)-TC,SC-O(n)--due to queue

function rightSideView_Ptr(root) {
    if (!root) return [];

    const q = [root];
    let left = 0;
    const result = [];

    while (left < q.length) {
        let qSize = q.length - left;

        for (let i = 0; i < qSize; i++) {
            let node = q[left++];

            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);

            if (i === qSize - 1) {
                result.push(node.val);
            }
        }
    }

    return result;
}