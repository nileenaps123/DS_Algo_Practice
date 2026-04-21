function serialize(root){

    const res=[];
    dfsSerialize(root,res);
    return res.join(',')

    function dfsSerialize(node,res){
        if(!node) {
            res.push('N');
            return;
        }
        res.push(node.val);
        dfsSerialize(node.left,res);
        dfsSerialize(node.right,res);
    } 
}

function deSerialize(data){

    let vals=data.split(',');
    let i={val:0}
    return dfsDeserialize(vals,i);

    function dfsDeserialize(vals,i){

        if(vals[i.val]==='N'){
            i.val++;
            return null;
        } 

        let node=new TreeNode(parseInt(vals[i.val]));
        i.val++;
        node.left=dfsDeserialize(vals,i);
        node.right=dfsDeserialize(vals,i);
        return node;
    }
}

/*
Serialize & deserialize
TC -O(n)-every node is visited once,
SC-O(n)-due to resultant arr +recur.stack(O(H))
*/