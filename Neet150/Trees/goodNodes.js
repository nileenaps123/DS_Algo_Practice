/*Time Complexity: O(n)
You visit each node exactly once during the DFS traversal.
If the tree has n nodes → total work is proportional to n.

👉 So, Time = O(n)  */

/*
🧠 Space Complexity: O(h)

This comes from the recursion call stack, not extra data structures.

h = height of the binary tree
In worst case (skewed tree like a linked list):
height = n → O(n)
In best/average case (balanced tree):
height = log n → O(log n)

👉 So, Space = O(h)
 */

function goodNodes(root) {

    let goodCount=0;
    dfs(root,root.val);
    return goodCount;
    function dfs(node,maxVal){

            if(!node)return; 
            if(node.val>=maxVal){
            goodCount++;
            maxVal=node.val;
            }

            if(node.left)dfs(node.left,maxVal);
            if(node.right)dfs(node.right,maxVal);
        
        
    }
}