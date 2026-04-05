/*
⏱️ Time Complexity: O(n)
Each node in the tree is visited exactly once.
At every node, you perform constant-time checks (node.val > left && node.val < right).
Therefore, if there are n nodes, total time = O(n).
 */
/*
💾 Space Complexity: O(h)
The space is due to the recursion stack.
h = height of the tree.
Cases:
Balanced tree → height ≈ log(n) → O(log n)
Skewed tree (like a linked list) → height = n → O(n) */


function isValidBST(root) {
    return isValid(root,-Infinity,Infinity);
 };

 function isValid(node,left,right){

        if(!node)return true;
        if(!(node.val>left && node.val<right)) return false;
        return (
           isValid(node.left,left,node.val) &&
           isValid(node.right,node.val,right))
 }