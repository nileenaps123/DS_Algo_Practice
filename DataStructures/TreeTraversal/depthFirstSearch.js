class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}


class BinarySearchTree{
    constructor(){
        this.root=null;
    }

    insert(val){
        let newNode=new Node(val)
        if(!this.root){
            this.root=newNode;
            return this;
        }
        else{
            let current=this.root;
            while(true){
              if(val===current.val)return undefined;  
              if(val>current.val){
                if(current.right===null){
                    current.right=newNode;
                    return this;
                }else{
                    current=current.right;

                }
              }
              else if (val<current.val){
                if(current.left===null){
                    current.left=newNode;
                    return this;
                }else{
                    current=current.left;
                    
                }
              }
            }
        }
    }

DFSPreorder(){
    let data=[];
    let current=this.root;

    function traverse(node){
        data.push(node.val);
        if(node.left) traverse(node.left);
        if(node.right)traverse(node.right);
    
    }

    traverse(current);
    return data;
}

DFSPostorder(){
    let data=[];
    let current=this.root;

    function traverse(node){
        if(node.left)traverse(node.left);
        if(node.right)traverse(node.right);
        data.push(node.val);
    }
    traverse(current);
    return data;
}

DFSInOrder(){
    let data=[];
    let current=this.root;

    function traverse(node){
        if(node.left)traverse(node.left);
        data.push(node.val);
        if(node.right)traverse(node.right);
     
    }
    traverse(current);
    return data;
}

}



let tree=new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);


console.log(tree.DFSInOrder());
