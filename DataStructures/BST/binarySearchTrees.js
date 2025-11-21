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
}


let bst=new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(2);
bst.insert(16);
bst.insert(7);
bst.insert(10)
console.log(bst);

